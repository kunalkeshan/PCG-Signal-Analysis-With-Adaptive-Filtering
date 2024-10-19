x = randn(1, 100);  % Example input signal, a random vector of length 100
dn = randn(1, 100); % Example desired signal, same length as x
mu = 0.01;          % Example step size, a small positive number
M = 4;              % Example filter length

[w, y, e] = least_mean_square_sign_regressor(x, dn, mu, M);  % Call the function

function[w,y,e]=least_mean_square_sign_regressor(x,dn,mu,M)
N=length(x);
y=zeros(1,N);
w=zeros(1,M);
for n=M:N
x1=x(n:-1:n-M+1);
y(n)=w*x1';
e(n)=dn(n)-y(n);
w=w+mu*e(n)*sign(x1);
end
end