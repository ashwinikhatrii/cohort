#include<iostream>
using namespace std;
int main(){
    // int num = 13;
    // int rem,ans= 0,multiply = 1;
    // while(num>0){
    //     rem = num%2;
    //     num = num/2;
    //     ans = rem* multiply + ans;
    //     multiply = multiply * 10;
    // }

    int num;
    cout<<"Enter the number : ";
    cin>>num;
    int rem, ans= 0 ,mul = 1;
    while(num>0){
        //  reminder
        rem = num%2;
        // quotient
        num = num/2;
        // ans 
        ans = rem * mul + ans;
        // mul 
        mul = mul * 10;

    }
    cout<<ans<<endl;
    return 0;
}
