function[w,y,e]=lms_sign_sign(x,dn,mu,M)
N=length(x);
y=zeros(1,N);
w=zeros(1,M);
for n=M:N
x1=x(n:-1:n-M+1);
y(n)=w*x1';
e(n)=dn(n)-y(n);
w=w+2*mu*sign(e(n))*sign(x1);
w1(n-M+1,:)=w(1,:);
end