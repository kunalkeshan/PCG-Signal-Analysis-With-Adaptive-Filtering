'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const codeExamples = [
	{
		title: 'LMS Algorithm Implementation',
		description: 'Core Least Mean Squares adaptive filtering algorithm that updates filter coefficients to minimize mean square error between desired and output signals.',
		python: `def lms(x, dn, mu, M):
    """
    LMS Adaptive Filter

    Parameters:
    - x: Input signal (noise reference)
    - dn: Desired signal (noisy PCG signal)
    - mu: Step size (learning rate), typically 0.01-0.1
    - M: Filter length (number of taps)

    Returns:
    - w: Final filter weights
    - y: Filter output
    - e: Error signal (filtered PCG)
    """
    N = len(x)
    w = np.zeros(M)  # Initialize weights to zero
    y = np.zeros(N)  # Filter output
    e = np.zeros(N)  # Error signal

    for n in range(M, N):
        # Extract input signal segment (reversed)
        x1 = x[n:n-M:-1] if n >= M else x[:n+1][::-1]

        # Compute filter output
        y[n] = np.dot(w, x1)

        # Compute error signal
        e[n] = dn[n] - y[n]

        # Update filter weights using LMS rule
        w = w + 2 * mu * e[n] * x1

    return w, y, e`,
		matlab: `function [w, y, e] = lms(x, dn, mu, M)
    % LMS Adaptive Filter
    %
    % Inputs:
    %   x  - Input signal (noise reference)
    %   dn - Desired signal (noisy PCG signal)
    %   mu - Step size (learning rate)
    %   M  - Filter length (number of taps)
    %
    % Outputs:
    %   w - Final filter weights
    %   y - Filter output
    %   e - Error signal (filtered PCG)

    N = length(x);
    w = zeros(1, M);  % Initialize filter weights

    for n = M:N
        % Input signal segment (reversed)
        x1 = x(n:-1:n-M+1);

        % Filter output
        y(n) = w * x1';

        % Error signal
        e(n) = dn(n) - y(n);

        % Update weights using LMS rule
        w = w + 2 * mu * e(n) * x1;
    end
end`,
	},
	{
		title: 'Leaky LMS Algorithm Implementation',
		description: 'Enhanced LMS variant with leakage factor to prevent numerical instability and improve convergence in low-SNR environments.',
		python: `def llms(x, dn, mu, M, lambda_):
    """
    Leaky LMS Adaptive Filter

    Parameters:
    - x: Input signal (noise reference)
    - dn: Desired signal (noisy PCG signal)
    - mu: Step size (learning rate)
    - M: Filter length (number of taps)
    - lambda_: Leakage factor (typically 0.0001-0.001)

    Returns:
    - w: Final filter weights
    - y: Filter output
    - e: Error signal (filtered PCG)
    """
    N = len(x)
    w = np.zeros(M)  # Initialize weights
    y = np.zeros(N)  # Filter output
    e = np.zeros(N)  # Error signal

    for n in range(M, N):
        # Extract input signal segment
        x1 = x[n:n-M:-1] if n >= M else x[:n+1][::-1]

        # Compute filter output
        y[n] = np.dot(w, x1)

        # Compute error signal
        e[n] = dn[n] - y[n]

        # Update weights with leakage term
        # Prevents unbounded weight growth
        w = (1 - mu * lambda_) * w + 2 * mu * e[n] * x1

    return w, y, e`,
		matlab: `function [w, y, e] = llms(x, dn, mu, M, lambda)
    % Leaky LMS Adaptive Filter
    %
    % Inputs:
    %   x      - Input signal (noise reference)
    %   dn     - Desired signal (noisy PCG signal)
    %   mu     - Step size (learning rate)
    %   M      - Filter length (number of taps)
    %   lambda - Leakage factor (prevents weight overflow)
    %
    % Outputs:
    %   w - Final filter weights
    %   y - Filter output
    %   e - Error signal (filtered PCG)

    N = length(x);
    w = zeros(1, M);  % Initialize filter weights
    y = zeros(1, N);  % Filter output
    e = zeros(1, N);  % Error signal

    for n = M:N
        % Input signal segment
        x1 = x(n:-1:n-M+1);

        % Filter output
        y(n) = w * x1';

        % Error signal
        e(n) = dn(n) - y(n);

        % Update weights with leakage
        w = (1 - mu * lambda) * w + 2 * mu * e(n) * x1;
    end
end`,
	},
	{
		title: 'Complete PCG Signal Processing Workflow',
		description: 'End-to-end pipeline demonstrating signal loading, noise addition, adaptive filtering, and visualization for heart sound analysis.',
		python: `import numpy as np
import matplotlib.pyplot as plt
from scipy.io.wavfile import write
import audioread

# 1. Load PCG Signal from MP3 file
def load_pcg_signal(signal_file):
    """Load heart sound signal from audio file"""
    with audioread.audio_open(signal_file) as audio:
        fs = audio.samplerate  # Sampling frequency
        s = np.frombuffer(
            b"".join(audio.read_data()),
            dtype=np.int16
        )
    return s, fs

# 2. Add Gaussian Noise to Simulate Real Conditions
signal_file = "signals/a0001.mp3"
s, fs = load_pcg_signal(signal_file)

# Add Gaussian noise (SNR manipulation)
v = 0.033 * np.random.randn(len(s))
orig = s + v  # Noisy PCG signal

# 3. Prepare Filter Inputs
x = 0.95 * v          # Noise reference (95% of noise)
dn = orig             # Desired signal (noisy PCG)
mu = 0.1              # Step size
M = 2                 # Filter length
lambda_ = 0.0001      # Leakage factor

# 4. Apply LMS Filter
w, y, e = lms(x, dn, mu, M)

# 5. Visualize Results
plt.figure(figsize=(10, 6))

plt.subplot(3, 1, 1)
plt.plot(s, label="Original PCG Signal")
plt.title("Original Heart Sound Signal")
plt.xlabel("Samples")
plt.ylabel("Amplitude")

plt.subplot(3, 1, 2)
plt.plot(orig, label="Noisy Signal", color='orange')
plt.title("Noisy PCG Signal (with Gaussian Noise)")
plt.xlabel("Samples")
plt.ylabel("Amplitude")

plt.subplot(3, 1, 3)
plt.plot(e, label="Filtered Signal", color='green')
plt.title("Filtered PCG Signal (LMS Output)")
plt.xlabel("Samples")
plt.ylabel("Amplitude")

plt.tight_layout()
plt.show()

# 6. Save Filtered Signal as WAV
output_file = "outputs/filtered_pcg.wav"
write(output_file, fs, e.astype(np.int16))
print(f"Filtered signal saved: {output_file}")`,
		matlab: `% Complete PCG Signal Processing Workflow in MATLAB

% 1. Load PCG Signal
[s, fs] = audioread('../signals/a0007.mp3');

% 2. Add Gaussian Noise
v = 0.033 * randn(size(s));  % Gaussian noise
orig = s + v;                 % Noisy PCG signal

% 3. Prepare Filter Parameters
x = 0.95 * v;                 % Noise reference
dn = orig;                    % Desired signal
mu = 0.1;                     % Step size
M = 2;                        % Filter length
lambda = 0.0001;              % Leakage factor (for LLMS)

% 4. Apply LMS Filter
[w, y, e] = lms(x, dn, mu, M);

% 5. Visualize Results
figure('Position', [100, 100, 800, 600]);

subplot(3, 1, 1);
plot(s);
title('Original PCG Signal');
xlabel('Samples');
ylabel('Amplitude');
grid on;

subplot(3, 1, 2);
plot(orig);
title('Noisy PCG Signal');
xlabel('Samples');
ylabel('Amplitude');
grid on;

subplot(3, 1, 3);
plot(e);
title('Filtered PCG Signal (LMS Output)');
xlabel('Samples');
ylabel('Amplitude');
grid on;

% 6. Save Filtered Signal
audiowrite('filtered_pcg.wav', e, fs);
disp('Filtered signal saved successfully');`,
	},
];

const CodeSnippets = () => {
	return (
		<section className='w-full bg-background'>
			<div className='max-w-screen-xl mx-auto p-6 md:p-16'>
				<h2 className='font-heading font-semibold text-3xl text-center mb-4'>
					Code Snippets
				</h2>
				<p className='text-center font-medium text-dim-greys max-w-3xl mx-auto mb-12'>
					Explore the implementation of adaptive filtering algorithms in both Python and MATLAB.
					These code examples demonstrate the core LMS algorithms and complete signal processing workflow.
				</p>

				<div className='space-y-12'>
					{codeExamples.map((example, index) => (
						<div key={`code-${index}`} className='bg-white rounded-2xl shadow-lg p-6 md:p-8'>
							{/* Title and Description */}
							<div className='mb-6'>
								<div className='flex items-start gap-4 mb-3'>
									<span className='text-primary text-2xl font-heading font-semibold flex-shrink-0'>
										{index + 1}
									</span>
									<h3 className='font-heading font-semibold text-xl pt-1'>
										{example.title}
									</h3>
								</div>
								<p className='font-medium text-dim-greys text-justify ml-10'>
									{example.description}
								</p>
							</div>

							{/* Code Implementations - Side by Side on Desktop */}
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
								{/* Python Implementation */}
								<div>
									<div className='flex items-center gap-2 mb-3 ml-10 lg:ml-0'>
										<div className='w-3 h-3 rounded-full bg-blue-500'></div>
										<h4 className='font-heading font-semibold text-base'>
											Python Implementation
										</h4>
									</div>
									<div className='ml-10 lg:ml-0 rounded-lg overflow-hidden'>
										<SyntaxHighlighter
											language='python'
											style={vscDarkPlus}
											customStyle={{
												margin: 0,
												borderRadius: '0.5rem',
												fontSize: '0.875rem',
											}}
											showLineNumbers={true}
										>
											{example.python}
										</SyntaxHighlighter>
									</div>
								</div>

								{/* MATLAB Implementation */}
								<div>
									<div className='flex items-center gap-2 mb-3 ml-10 lg:ml-0'>
										<div className='w-3 h-3 rounded-full bg-orange-500'></div>
										<h4 className='font-heading font-semibold text-base'>
											MATLAB Implementation
										</h4>
									</div>
									<div className='ml-10 lg:ml-0 rounded-lg overflow-hidden'>
										<SyntaxHighlighter
											language='matlab'
											style={vscDarkPlus}
											customStyle={{
												margin: 0,
												borderRadius: '0.5rem',
												fontSize: '0.875rem',
											}}
											showLineNumbers={true}
										>
											{example.matlab}
										</SyntaxHighlighter>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Usage Notes */}
				<div className='mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6'>
					<h3 className='font-heading font-semibold text-lg mb-3'>
						Implementation Notes
					</h3>
					<ul className='space-y-2 font-medium text-sm text-dim-greys'>
						<li className='flex items-start gap-2'>
							<span className='text-primary mt-1'>•</span>
							<span>
								<strong>Filter Length (M):</strong> Typically set to 2-32 taps. Larger values provide
								better frequency selectivity but increase computational cost.
							</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='text-primary mt-1'>•</span>
							<span>
								<strong>Step Size (μ):</strong> Controls convergence speed vs. steady-state error.
								Range: 0.01-0.1 for PCG signals. Higher values converge faster but with more noise.
							</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='text-primary mt-1'>•</span>
							<span>
								<strong>Leakage Factor (λ):</strong> Prevents weight drift in Leaky LMS.
								Typical range: 0.0001-0.001. Essential for long-duration recordings.
							</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='text-primary mt-1'>•</span>
							<span>
								<strong>Noise Reference:</strong> Scaled to 95% of original noise (x = 0.95 * v)
								to ensure filter doesn&apos;t completely remove the signal.
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default CodeSnippets;
