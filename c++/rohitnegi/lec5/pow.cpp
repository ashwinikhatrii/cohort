#include<iostream>
using namespace std;
int main(){
    int n,pow,i,number;
    cout<<"enter the number : ";
    cin>>n;
    cout<<"Enter the power: ";
    cin>>pow;
    number = n;
    for(i=1;i<pow;i++){
        number = number*n;
    }
    cout<<number<<endl;
    return 0;
}