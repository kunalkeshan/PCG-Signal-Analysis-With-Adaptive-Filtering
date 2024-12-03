function [w, y, e] = llms(x, dn, mu, M, lambda)
    N = length(x);
    w = zeros(1, M); % Initialize filter weights
    y = zeros(1, N); % Filter output
    e = zeros(1, N); % Error signal
    for n = M:N
        x1 = x(n:-1:n-M+1); % Input signal segment
        y(n) = w * x1'; % Filter output
        e(n) = dn(n) - y(n); % Error signal
        w = (1 - mu * lambda) * w + 2 * mu * e(n) * x1; % Update weights
    end
end
