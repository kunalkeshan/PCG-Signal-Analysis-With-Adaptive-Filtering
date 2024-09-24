function[w,y,e]=lms(x,dn,mu,M)            
N=length(x);w=zeros(1,M);
for n=M:N
x1=x(n:-1:n-M+1);
y(n) = w*x1';
e(n) = dn(n)-y(n);
w = w+2*mu*e(n)*x1;
end

