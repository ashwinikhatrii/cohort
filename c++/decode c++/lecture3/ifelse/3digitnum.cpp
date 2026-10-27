// take positive integer input and tell if it is a three digit number or not
#include<iostream>
using namespace std;
int main(){
    cout<<"enter a number";
    int n;
    cin>>n;
    if(n>99 && n<=999){
        cout<<"three digit number";

    }else{
        cout<<"not a three digit number";
    }
    return 0;
}