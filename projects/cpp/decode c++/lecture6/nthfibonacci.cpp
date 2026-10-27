// print the nth fibonacci series numbers 
#include<iostream>
using namespace std;
int main(){
    int n ;
    cout<<"enter a number : "<<endl;
    cin>>n;
    int a = 1;
    int b = 1;
    int sum = 0;
    sum = a + b;
    for(int i = 1;i<=n-2;i++){
        sum = a + b ; 
        a = b ;
        b = sum ;
    }
    cout<<b;
}