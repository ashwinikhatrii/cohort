#include<iostream>
using namespace std;
int main(){
    // find the given input is even or odd
    int n;
    cout<<"enter a number to check even or odd ";
    cin>>n;
    if(n%2==0){
        cout<<"the given input is even";

    }else{
        cout<<"the given input is odd ";
    }
    return 0;
}