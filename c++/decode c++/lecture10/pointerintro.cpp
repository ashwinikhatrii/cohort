#include<iostream>
using namespace std;
int main(){
    int x = 122;
    int* p = &x;

    cout<<&x<<endl;
    cout<<p<<endl;
    cout<<*p;

    *p = 9 ;
    cout<<*p;
}