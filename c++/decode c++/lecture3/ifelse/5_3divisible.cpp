// take positive integer input and tell if it is divisible by 5 and 3
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"enter the value for n";
    cin>>n;
    if(n%5==0 && n%3==0){
        cout<<"the number is divisible by 5 and three";
    }
    else{
        cout<<"the number is not divisible by 5 and three";
    }
    return 0;
}