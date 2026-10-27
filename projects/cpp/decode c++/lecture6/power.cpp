/*
two numbers are entered through the keyboard. 
write a program to find the value of one number raised to the power of another .

int a , b ;cin>>a>>b ; 

a^b;
*/
#include<iostream>
using namespace std;
int main(){
    float power = 1;
    int a , b ;
    cout<<"enter base : ";
    cin>>a;
    cout<<"enter exponent : ";
    cin>>b ;
    bool flag = true ;// true means power positive 
    if(b<0){
        flag = false;// false means negative power 
        b = -b;
    }
    for(int i = 1; i<=b; i++){
        power*=a;
    }
    if(flag == false) {
        power = 1/power;
        b = -b;
    }
    if(a==0 && b ==0 ) cout<<"power not defined : ";
    cout<<power;
}