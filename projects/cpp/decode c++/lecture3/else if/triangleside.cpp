//  take 3 numbers input and tell if they can be the sides of a triangle.
/*
a+b >c
b+c>a
a+c>b
*/

#include<iostream>
using namespace std;
int main(){
    int a,b,c;
    cout<<"enter 1st sides";
    cin>>a;
    cout<<"enter 2nd sides";
    cin>>b;
    cout<<"enter 3rd sides";
    cin>>c;
    if((a+b>c)&& (b+c>a)&& (c+a>b)){
        cout<<a<<","<<b<<","<<c<<"can be the sides of a triangle";
    }
    else{
        cout<<"invalid triangle";
    }
    return 0;
}