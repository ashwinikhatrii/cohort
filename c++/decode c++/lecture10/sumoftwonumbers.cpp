#include<iostream>
using namespace std;
int main(){
    // int x = 6;
    // int y = 7;
    // int* p1 = &x;
    // int* p2 = &y;

    // cout<<*p1 + *p2;

    int x,y;
    int* p1 = &x;
    int* p2 = &y;
    cout<<"enter first number: ";
    cin>>*p1;
    cout<<"enter second number: ";
    cin>>*p2;

    cout<<*p1 + *p2;
}