import numpy as np
import matplotlib.pyplot as plt

class AdaptiveFilter:
    def __init__(self, filter_length, step_size, num_stages=1):
        self.filter_length = filter_length
        self.step_size = step_size
        self.num_stages = num_stages
        self.weights = [np.zeros(filter_length) for _ in range(num_stages)]

    def lms_update(self, x, d, stage):
        y = np.dot(x, self.weights[stage])
        e = d - y
        self.weights[stage] += self.step_size * e * x
        return y, e

    def sign_lms_update(self, x, d, stage):
        y = np.dot(x, self.weights[stage])
        e = d - y
        self.weights[stage] += self.step_size * np.sign(e) * x
        return y, e

    def process(self, x, d):
        N = len(x)
        y = np.zeros(N)
        e = np.zeros(N)
        
        for n in range(self.filter_length, N):
            x_n = x[n-self.filter_length:n][::-1]
            d_n = d[n]
            
            for stage in range(self.num_stages):
                if stage % 2 == 0:
                    y_n, e_n = self.lms_update(x_n, d_n, stage)
                else:
                    y_n, e_n = self.sign_lms_update(x_n, d_n, stage)
                d_n = e_n  # Use error as input for next stage
            
            y[n] = y_n
            e[n] = e_n
        
        return y, e

def generate_pcg_signal(N):
    t = np.linspace(0, 10, N)
    signal = np.sin(2 * np.pi * 1 * t) + 0.5 * np.sin(2 * np.pi * 2 * t)
    return signal

def add_noise(signal, snr_db):
    signal_power = np.mean(signal**2)
    noise_power = signal_power / (10**(snr_db/10))
    noise = np.random.normal(0, np.sqrt(noise_power), len(signal))
    return signal + noise

def main():
    N = 1000
    filter_length = 32
    step_size = 0.01
    num_stages = 2

    # Generate synthetic PCG signal and add noise
    clean_signal = generate_pcg_signal(N)
    noisy_signal = add_noise(clean_signal, snr_db=10)

    # Create and apply adaptive filter
    adaptive_filter = AdaptiveFilter(filter_length, step_size, num_stages)
    filtered_signal, error = adaptive_filter.process(noisy_signal, clean_signal)

    # Plot results
    plt.figure(figsize=(12, 8))
    plt.subplot(3, 1, 1)
    plt.plot(clean_signal)
    plt.title('Clean PCG Signal')
    plt.subplot(3, 1, 2)
    plt.plot(noisy_signal)
    plt.title('Noisy PCG Signal')
    plt.subplot(3, 1, 3)
    plt.plot(filtered_signal)
    plt.title('Filtered PCG Signal')
    plt.tight_layout()
    plt.show()

    # Calculate and print SNR improvement
    input_snr = 10 * np.log10(np.mean(clean_signal**2) / np.mean((noisy_signal - clean_signal)**2))
    output_snr = 10 * np.log10(np.mean(clean_signal**2) / np.mean((filtered_signal - clean_signal)**2))
    print(f"Input SNR: {input_snr:.2f} dB")
    print(f"Output SNR: {output_snr:.2f} dB")
    print(f"SNR Improvement: {output_snr - input_snr:.2f} dB")

if __name__ == "__main__":
    main()