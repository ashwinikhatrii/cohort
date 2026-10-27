// given an integer . print the absolute value of that integer 
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"enter a number";
    cin>>n;
    // if(n>0){
    //     cout<<n;
    // }else{
    //     cout<<-n;
    // }
    if(n<0)
    n=-n;
    cout<<n;
    return 0;
}