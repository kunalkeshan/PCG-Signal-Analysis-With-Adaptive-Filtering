t = -pi:0.01:pi;
Fs=10;
Fs1=100;
s=1*sin(Fs.*t);
v=0.9*sin(Fs1.*t);
dn=s+v;
