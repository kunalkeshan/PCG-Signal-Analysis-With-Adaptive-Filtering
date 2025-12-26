# PCG Signal Analysis Using Adaptive Filtering Technique

## Introduction

This project implements an adaptive filtering technique for Phonocardiogram (PCG) signal analysis. PCG signals are recordings of heart sounds, which provide critical information about the heart's mechanical activity. However, these signals are often contaminated with noise from various sources, making accurate analysis challenging.

Our goal is to develop an effective noise reduction technique using adaptive filters to enhance the quality of PCG signals for more accurate cardiac assessments.

## Features

- Multi-stage feed-forward adaptive filter
- Automatic adjustment of filter stages
- Switching between LMS and Sign-LMS algorithms
- Synthetic PCG signal generation for testing
- Noise addition with controllable SNR
- Performance evaluation using SNR improvement metric
- Visualization of original, noisy, and filtered signals

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/kunalkeshan/PCG-Signal-Analysis-With-Adaptive-Filtering.git
   cd PCG-Signal-Analysis-With-Adaptive-Filtering
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `.\venv\Scripts\activate.bat`
   ```

3. Install the required packages:

   ``` bash
   pip install -r requirements.txt
   ```

## Usage

Run the main script:

``` bash
python main.py
```

The script will:

1. Prompt you to select an MP3 file from the `signals/` directory.
2. Add Gaussian noise and apply either LMS or Leaky LMS filtering.
3. Display plots for the original, noisy, and filtered signals.
4. Save the filtered output as a timestamped WAV file under `outputs/`.

### Audio Input Requirements

- Place MP3 files in the `signals/` directory.
- The CLI uses `audioread` by default and falls back to FFmpeg if needed.
- Install FFmpeg and ensure it is on your `PATH` if you see a backend error.

### Front-End Client (Optional)

The `client/` directory contains a Next.js UI for documentation and project
marketing content.

```bash
cd client
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to view the client site.

## Project Structure

- `main.py`: Main script containing the adaptive filter implementation and signal processing logic
- `requirements.txt`: List of Python package dependencies
- `README.md`: This file, containing project information and instructions
- `client/`: Next.js front-end content and static pages

## Code Understanding

### Key Parameters

The adaptive filter implementation uses several important parameters that affect its performance:

1. **N (Number of samples)**

   ```python
   N = 1000
   ```

   - Represents the total number of samples in the input signal.
   - Adjust based on the length of your PCG signals.

2. **filter_length**

   ```python
   filter_length = 32
   ```

   - Defines the number of coefficients (taps) in each stage of the adaptive filter.
   - A longer filter can potentially remove more noise but requires more computation and may converge more slowly.
   - The optimal length depends on the characteristics of your signal and noise.

3. **step_size**

   ```python
   step_size = 0.01
   ```

   - Also known as the learning rate or adaptation rate.
   - Controls how quickly the filter adapts to the input.
   - A larger step size leads to faster adaptation but may result in less stability or accuracy.
   - A smaller step size provides more accurate results but converges more slowly.
   - The optimal value is usually determined experimentally.

4. **num_stages**

   ```python
   num_stages = 2
   ```

   - Defines the number of adaptive filter stages in series.
   - Multiple stages can potentially provide better noise cancellation, especially for complex noise environments.
   - Each stage attempts to remove residual noise from the previous stage.
   - More stages increase computational complexity.

### Adjusting Parameters

To optimize the adaptive filter for your specific PCG signal analysis:

- Increase `N` if you're working with longer PCG recordings.
- Experiment with different `filter_length` values to balance between noise reduction and computational efficiency.
- Adjust `step_size` to find the right balance between adaptation speed and stability.
- Try different `num_stages` values to see if additional stages improve noise cancellation for your specific PCG signals.

Remember that the optimal values for these parameters may vary depending on the characteristics of your PCG signals and the noise you're trying to remove. Experimentation and validation with real PCG data are key to finding the best configuration for your specific use case.

### Package Usage

This project primarily uses two Python packages: NumPy and Matplotlib. Here's an overview of their roles in the project:

1. **NumPy**

   ```python
   import numpy as np
   ```

   - NumPy is used for efficient numerical operations and array manipulations.
   - Key uses in this project:
     - Creating and manipulating signal arrays: `np.zeros()`, `np.linspace()`
     - Mathematical operations: `np.sin()`, `np.mean()`, `np.sqrt()`
     - Random number generation for noise: `np.random.normal()`
   - NumPy's efficient array operations are crucial for the performance of our signal processing tasks.

2. **Matplotlib**

   ```python
   import matplotlib.pyplot as plt
   ```

   - Matplotlib is used for creating visualizations of our signals and results.
   - Key uses in this project:
     - Creating a figure and subplots: `plt.figure()`, `plt.subplot()`
     - Plotting signals: `plt.plot()`
     - Setting titles and labels: `plt.title()`, `plt.xlabel()`, `plt.ylabel()`
     - Displaying the plot: `plt.show()`
   - Matplotlib allows us to visually inspect the original PCG signal, the noisy signal, and the filtered output, which is crucial for assessing the performance of our adaptive filter.


## Dataset

This project uses the **PhysioNet/CinC Challenge 2016 Dataset** for PCG signal analysis. The dataset contains phonocardiogram recordings from multiple clinical locations, providing a diverse set of heart sound samples for testing and validation.

- **Dataset Link**: [PhysioNet/CinC Challenge 2016](https://archive.physionet.org/pn3/challenge/2016/)

The dataset includes normal and abnormal heart sound recordings, making it suitable for developing and evaluating adaptive filtering techniques for cardiac assessment.

## Future Work

- Implement real PCG signal input
- Add more advanced adaptive algorithms
- Develop automatic stage adjustment functionality
- Implement additional performance metrics
- Optimize for large dataset processing

## Contributing

Contributions to this project are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md)
for setup details, workflow, and quality checks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries regarding this project, please open an issue in the GitHub repository.
