// write a program to create a calculator that performs basic arithmetic operations (add , subtract , multiply and divide)using switch case and functions . the calculator should input two numbers and an operrator fromm user.
#include<iostream>
using namespace std;
int main(){
    int a, b ;
    char op ;
    cout<<"enter the problem: ";
    cin>>a>>op>>b;
    // if(op=='+') cout<<a+b;
    // if(op=='-') cout<<a-b;
    // if(op=='*') cout<<a*b;
    // if(op=='/') cout<<a/b;
    switch(op){
        case '+' : 
        cout<<a+b;
        break;
        case '-' : 
        cout<<a-b;
        break;
        case '*' : 
        cout<<a*b;
        break;
        case '/' : 
        cout<<a/b;
        break;
    }
}