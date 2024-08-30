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
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ``` bash
   pip install -r requirements.txt
   ```

## Usage

Run the main script:

``` bash
python pcg_adaptive_filter.py
```

This will generate a synthetic PCG signal, add noise, apply the adaptive filter, and display the results.

## Project Structure

- `pcg_adaptive_filter.py`: Main script containing the adaptive filter implementation and signal processing logic
- `requirements.txt`: List of Python package dependencies
- `README.md`: This file, containing project information and instructions

## Future Work

- Implement real PCG signal input
- Add more advanced adaptive algorithms
- Develop automatic stage adjustment functionality
- Implement additional performance metrics
- Optimize for large dataset processing

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any queries regarding this project, please open an issue in the GitHub repository.
