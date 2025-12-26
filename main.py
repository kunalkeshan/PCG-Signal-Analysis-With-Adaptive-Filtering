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
    """
    N = len(x)
    w = np.zeros(M)
    y = np.zeros(N)
    e = np.zeros(N)
    for n in range(M, N):
        x1 = x[n:n-M:-1] if n >= M else x[:n+1][::-1]
        y[n] = np.dot(w, x1)
        e[n] = dn[n] - y[n]
        w = w + 2 * mu * e[n] * x1
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
    """
    N = len(x)
    w = np.zeros(M)
    y = np.zeros(N)
    e = np.zeros(N)
    for n in range(M, N):
        x1 = x[n:n-M:-1] if n >= M else x[:n+1][::-1]
        y[n] = np.dot(w, x1)
        e[n] = dn[n] - y[n]
        w = (1 - mu * lambda_) * w + 2 * mu * e[n] * x1
    return w, y, e

# Load signals dynamically
def get_signal_files(directory):
    """Return a list of MP3 filenames from the provided directory."""
    return [file for file in os.listdir(directory) if file.endswith(".mp3")]

# Main workflow
def main():
    """Run the interactive CLI workflow for filtering PCG signals."""
    # Set up the signals directory
    signals_dir = "signals"
    outputs_dir = "outputs"

    if not os.path.exists(signals_dir):
        print(f"Directory '{signals_dir}' not found. Please create it and add signal files.")
        return

    # Create the outputs directory if it doesn't exist
    if not os.path.exists(outputs_dir):
        os.makedirs(outputs_dir)

    # List available signals
    signal_files = get_signal_files(signals_dir)
    if not signal_files:
        print("No signals found in the 'signals' directory. Please add .mp3 files.")
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
    answers = inquirer.prompt(questions)

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

    # Add Gaussian noise
    v = 0.033 * np.random.randn(len(s))
    orig = s + v

    # Filter parameters
    x = 0.95 * v
    dn = orig
    mu = 0.1
    M = 2
    lambda_ = 0.0001  # For Leaky LMS

    # Run selected algorithm
    if algorithm == "LMS":
        w, y, e = lms(x, dn, mu, M)
    elif algorithm == "Leaky LMS":
        w, y, e = llms(x, dn, mu, M, lambda_)

    # Plot the results
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

    # Save output as a .wav file
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")  # Generate a timestamp
    output_file = os.path.join(
        outputs_dir, 
        f"{answers['signal'].split('.')[0]}_{algorithm}_{timestamp}_output.wav"
    )
    write(output_file, fs, e.astype(np.int16))
    print(f"Filtered signal saved as {output_file}")

if __name__ == "__main__":
    main()
