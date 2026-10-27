// take 3 positive integers input and print the greatest of them 
#include<iostream>
using namespace std;
int main(){
    int a ,b ,c ;
    cout<<"enter first number";
    cin>>a;
    cout<<"enter second number";
    cin>>b;
    cout<<"enter third number";
    cin>>c;

    if(a>b && a>c){
        cout<<"a is greater than b and c"<<a;
    }
    if(b>a && b>c){
        cout<<b<<"b is greatest value";
    }
    if(c>a && c>b){
        cout<<"c is greatest among them ";
    }
    return 0;
}