// divident = divisor* quotient + reminder
// take two integer input a and b:a>b , find the reminder when a is divided by b.
// a=b*q+r
// r = a-b*q
//a/b = quotient
#include<iostream>
using namespace std;
int main(){
    int a = 14;
    int b = 3;
    int r;
    int q;
    q=a/b;
    cout<<b<<endl;
    r = a-(b*q);
    cout<<r<<endl;
}