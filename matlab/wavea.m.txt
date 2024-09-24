% Parameters
fs = 1000; % Sampling frequency (adjust if necessary)
duration = 5; % Duration in seconds
frequency = 150; % Dominant frequency (adjust based on image)
amplitude = 0.2; % Amplitude (adjust based on image)
noisy_noise_level = 0.1; % Noise level for noisy signal
spike_width = 0.02; % Spike width in seconds
spike_spacing = 0.2; % Spike spacing in seconds
spike_amplitude_variation = 0.3; % Variation in spike amplitudes

% Time vector
t = 0:1/fs:duration-1/fs;

% Generate clean whale sound waveform with spikes
whale_sound = amplitude * sin(2*pi*frequency*t);
spike_indices = 1:spike_spacing*fs:length(t);
spike_amplitudes = amplitude * (1 + spike_amplitude_variation * randn(size(spike_indices)));
whale_sound(spike_indices) = whale_sound(spike_indices) + spike_amplitudes;
whale_sound = conv(whale_sound, ones(1, round(spike_width*fs)), 'same');

% Add more noise to noisy signal
noisy_noise = noisy_noise_level * randn(size(t));
noisy_whale_sound_noisy = whale_sound + noisy_noise;

% Plot the waveforms
figure;
subplot(2, 1, 1);
plot(t, whale_sound);
title('Clean Whale Sound with Spikes');

subplot(2, 1, 2);
plot(t, noisy_whale_sound_noisy);
title('Noisy Whale Sound with Noise');