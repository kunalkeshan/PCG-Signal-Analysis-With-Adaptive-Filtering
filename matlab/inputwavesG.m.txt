t = -pi:0.01:pi;
Fs=10;
s=1*sin(Fs.*t);
v=0.9*randn (size(s)); % adding a random Gaussian noise eqn c=s+v;
orig=s+v;