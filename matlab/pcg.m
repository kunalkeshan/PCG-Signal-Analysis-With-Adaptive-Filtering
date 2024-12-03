[s, fs] = audioread('../signals/a0007.mp3'); % Load PCG signal 
v = 0.033 * randn(size(s)); % Add Gaussian noise 
orig = s + v; % Create noisy signal