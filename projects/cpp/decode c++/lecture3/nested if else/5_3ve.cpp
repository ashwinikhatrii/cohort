// take positive integer input and tell if it is divisible by 5 and 3
#include<iostream>
using namespace std;
int main(){
    cout<<"enter an integer ";
    int n;
    cin>>n;
    if(n%5==0){
        if(n%3==0){
            cout<<"the number is divisible by 5 and 3 both ";
        }
        else{// n %5==0 but n%3!=0
            cout<<"number not matching conditions ";
        }
    }
        else{
            cout<<"number not matching conditions ";
    }
    return 0;
}