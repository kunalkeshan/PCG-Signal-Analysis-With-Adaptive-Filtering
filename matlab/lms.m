function [w, y, e] = lms(x, dn, mu, M) 
  N = length(x); 
  w = zeros(1, M); % Initialize filter weights 
  for n = M:N 
    x1 = x(n:-1:n-M+1); % Input signal segment 
    y(n) = w * x1'; % Filter output 
    e(n) = dn(n) - y(n); % Error signal 
    w = w + 2 * mu * e(n) * x1; % Update weights 
  end 
end
