function[w,y,e,J,w1,Js,l]=lms_sign_error_MSE(x,dn,mu,M,s)
N=length(x);
y=zeros(1,N);
w=zeros(1,M);%initialized filter coefficient vector;
for n=M:N
x1=x(n:-1:n-M+1);
y(n)=w*x1';
e(n)=dn(n)-y(n);
l(n)=s(n)-e(n);
w=w+mu*sign(e(n))*x1;
w1(n-M+1,:)=w(1,:);
end
J = l.^2;%J is the learning curve of the adaptation;
for n = 1:length(x)-5
Js(n) = (J(n)+J(n+1)+J(n+2)+J(n+3)+J(n+4)+J(n+5))/6;
end
