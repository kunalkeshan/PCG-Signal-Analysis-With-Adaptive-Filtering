"""CLI workflow for adaptive filtering of PCG signals.

This script loads an audio signal from the `signals/` directory, adds Gaussian
noise, applies either LMS or Leaky LMS adaptive filtering, and saves the
filtered result to `outputs/` as a WAV file.
"""

import os
import numpy as np
import matplotlib.pyplot as plt
import simpleaudio as sa
import inquirer
from scipy.io.wavfile import write
import traceback
from datetime import datetime

# Define LMS function
def lms(x, dn, mu, M):
    """Apply the Least Mean Squares (LMS) adaptive filter.

    Args:
        x: Input signal (typically a noise reference).
        dn: Desired signal (noisy signal to be filtered).
        mu: Step size / learning rate.
        M: Filter length (number of taps).

    Returns:
        Tuple of (weights, output_signal, error_signal).

    Raises:
        ValueError: If input parameters are invalid.
        TypeError: If inputs are not numpy arrays or numeric types.
    """
    # Validate inputs
    if not isinstance(x, np.ndarray) or not isinstance(dn, np.ndarray):
        raise TypeError("Input signals 'x' and 'dn' must be numpy arrays.")

    if len(x) != len(dn):
        raise ValueError(f"Input signals must have the same length. Got x: {len(x)}, dn: {len(dn)}")

    if not isinstance(mu, (int, float)) or mu <= 0:
        raise ValueError(f"Step size 'mu' must be a positive number. Got: {mu}")

    if not isinstance(M, int) or M <= 0:
        raise ValueError(f"Filter length 'M' must be a positive integer. Got: {M}")

    if M > len(x):
        raise ValueError(f"Filter length 'M' ({M}) cannot exceed signal length ({len(x)}).")

    N = len(x)
    w = np.zeros(M)
    y = np.zeros(N)
    e = np.zeros(N)

    try:
        for n in range(M, N):
            x1 = x[n:n-M:-1] if n >= M else x[:n+1][::-1]
            y[n] = np.dot(w, x1)
            e[n] = dn[n] - y[n]
            w = w + 2 * mu * e[n] * x1
    except Exception as ex:
        raise RuntimeError(f"Error during LMS filtering at sample {n}: {ex}")

    return w, y, e

# Define Leaky LMS function
def llms(x, dn, mu, M, lambda_):
    """Apply the Leaky LMS adaptive filter.

    Args:
        x: Input signal (typically a noise reference).
        dn: Desired signal (noisy signal to be filtered).
        mu: Step size / learning rate.
        M: Filter length (number of taps).
        lambda_: Leakage factor controlling weight decay.

    Returns:
        Tuple of (weights, output_signal, error_signal).

    Raises:
        ValueError: If input parameters are invalid.
        TypeError: If inputs are not numpy arrays or numeric types.
    """
    # Validate inputs
    if not isinstance(x, np.ndarray) or not isinstance(dn, np.ndarray):
        raise TypeError("Input signals 'x' and 'dn' must be numpy arrays.")

    if len(x) != len(dn):
        raise ValueError(f"Input signals must have the same length. Got x: {len(x)}, dn: {len(dn)}")

    if not isinstance(mu, (int, float)) or mu <= 0:
        raise ValueError(f"Step size 'mu' must be a positive number. Got: {mu}")

    if not isinstance(M, int) or M <= 0:
        raise ValueError(f"Filter length 'M' must be a positive integer. Got: {M}")

    if M > len(x):
        raise ValueError(f"Filter length 'M' ({M}) cannot exceed signal length ({len(x)}).")

    if not isinstance(lambda_, (int, float)) or lambda_ < 0:
        raise ValueError(f"Leakage factor 'lambda_' must be a non-negative number. Got: {lambda_}")

    N = len(x)
    w = np.zeros(M)
    y = np.zeros(N)
    e = np.zeros(N)

    try:
        for n in range(M, N):
            x1 = x[n:n-M:-1] if n >= M else x[:n+1][::-1]
            y[n] = np.dot(w, x1)
            e[n] = dn[n] - y[n]
            w = (1 - mu * lambda_) * w + 2 * mu * e[n] * x1
    except Exception as ex:
        raise RuntimeError(f"Error during Leaky LMS filtering at sample {n}: {ex}")

    return w, y, e

# Load signals dynamically
def get_signal_files(directory):
    """Return a list of MP3 filenames from the provided directory.

    Args:
        directory: Path to the directory containing signal files.

    Returns:
        List of MP3 filenames.

    Raises:
        FileNotFoundError: If the directory does not exist.
        PermissionError: If the directory cannot be accessed.
    """
    try:
        files = os.listdir(directory)
        return [file for file in files if file.endswith(".mp3")]
    except FileNotFoundError:
        raise FileNotFoundError(f"Directory '{directory}' does not exist.")
    except PermissionError:
        raise PermissionError(f"Permission denied when accessing directory '{directory}'.")
    except Exception as e:
        raise RuntimeError(f"Unexpected error while accessing directory '{directory}': {e}")

# Main workflow
def main():
    """Run the interactive CLI workflow for filtering PCG signals."""
    # Set up the signals directory
    signals_dir = "signals"
    outputs_dir = "outputs"

    if not os.path.exists(signals_dir):
        print(f"Error: Directory '{signals_dir}' not found. Please create it and add signal files.")
        return

    # Create the outputs directory if it doesn't exist
    try:
        if not os.path.exists(outputs_dir):
            os.makedirs(outputs_dir)
    except PermissionError:
        print(f"Error: Permission denied when creating output directory '{outputs_dir}'.")
        return
    except Exception as e:
        print(f"Error: Failed to create output directory '{outputs_dir}': {e}")
        return

    # List available signals
    try:
        signal_files = get_signal_files(signals_dir)
    except (FileNotFoundError, PermissionError, RuntimeError) as e:
        print(f"Error: {e}")
        return

    if not signal_files:
        print("Error: No signals found in the 'signals' directory. Please add .mp3 files.")
        return

    # Interactive CLI for signal selection
    questions = [
        inquirer.List(
            "signal",
            message="Select the signal file",
            choices=signal_files
        ),
        inquirer.List(
            "algorithm",
            message="Select the algorithm",
            choices=["LMS", "Leaky LMS"]
        ),
    ]

    try:
        answers = inquirer.prompt(questions)
    except Exception as e:
        print(f"Error: Failed to get user input: {e}")
        return

    # Check if user cancelled the prompt
    if answers is None or "signal" not in answers or "algorithm" not in answers:
        print("Operation cancelled by user.")
        return

    signal_file = os.path.join(signals_dir, answers["signal"])
    algorithm = answers["algorithm"]

    # Load the selected signal
    try:
        import audioread
        with audioread.audio_open(signal_file) as audio:
            fs = audio.samplerate
            s = np.frombuffer(b"".join(audio.read_data()), dtype=np.int16)
    except audioread.NoBackendError:
        print("audioread failed: No suitable backend found. Trying ffmpeg as a fallback...")
        try:
            import ffmpeg
            out, _ = (
                ffmpeg.input(signal_file)
                .output('pipe:', format='s16le', acodec='pcm_s16le')
                .run(capture_stdout=True, capture_stderr=True)
            )
            s = np.frombuffer(out, dtype=np.int16)
            fs = 44100  # Default sample rate for ffmpeg
        except FileNotFoundError:
            print("FFmpeg not found. Please install FFmpeg and ensure it's added to the PATH.")
            return
        except Exception as ffmpeg_error:
            print(f"FFmpeg failed with error: {ffmpeg_error}")
            traceback.print_exc()
            return

    # Validate signal data
    if len(s) == 0:
        print("Error: Loaded signal is empty.")
        return

    # Add Gaussian noise
    try:
        v = 0.033 * np.random.randn(len(s))
        orig = s + v
    except Exception as e:
        print(f"Error: Failed to add noise to signal: {e}")
        return

    # Filter parameters
    x = 0.95 * v
    dn = orig
    mu = 0.1
    M = 2
    lambda_ = 0.0001  # For Leaky LMS

    # Run selected algorithm
    try:
        if algorithm == "LMS":
            w, y, e = lms(x, dn, mu, M)
        elif algorithm == "Leaky LMS":
            w, y, e = llms(x, dn, mu, M, lambda_)
        else:
            print(f"Error: Unknown algorithm '{algorithm}'.")
            return
    except (ValueError, TypeError, RuntimeError) as e:
        print(f"Error: Filtering failed: {e}")
        return

    # Plot the results
    try:
        plt.figure(figsize=(10, 6))
        plt.subplot(3, 1, 1)
        plt.plot(s, label="Original Signal")
        plt.title("Original Signal")
        plt.xlabel("Samples")
        plt.ylabel("Amplitude")

        plt.subplot(3, 1, 2)
        plt.plot(orig, label="Noisy Signal")
        plt.title("Noisy Signal")
        plt.xlabel("Samples")
        plt.ylabel("Amplitude")

        plt.subplot(3, 1, 3)
        plt.plot(e, label=f"Filtered Signal ({algorithm} Output)")
        plt.title(f"Filtered Signal ({algorithm} Output)")
        plt.xlabel("Samples")
        plt.ylabel("Amplitude")

        plt.tight_layout()
        plt.show()
    except Exception as e:
        print(f"Warning: Failed to display plots: {e}")
        # Continue execution even if plotting fails

    # Save output as a .wav file
    try:
        timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")  # Generate a timestamp
        signal_name = answers['signal'].split('.')[0] if '.' in answers['signal'] else answers['signal']
        output_filename = f"{signal_name}_{algorithm.replace(' ', '_')}_{timestamp}_output.wav"
        output_file = os.path.join(outputs_dir, output_filename)

        # Convert to int16, handling potential overflow
        e_clipped = np.clip(e, -32768, 32767)
        write(output_file, fs, e_clipped.astype(np.int16))
        print(f"Success: Filtered signal saved as '{output_file}'")
    except PermissionError:
        print(f"Error: Permission denied when saving to '{output_file}'.")
    except ValueError as ve:
        print(f"Error: Invalid data format for WAV file: {ve}")
    except Exception as ex:
        print(f"Error: Failed to save output file: {ex}")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nOperation cancelled by user (Ctrl+C).")
    except Exception as e:
        print(f"\n\nUnexpected error occurred: {e}")
        traceback.print_exc()
