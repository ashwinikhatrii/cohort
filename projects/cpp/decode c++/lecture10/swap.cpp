#include<iostream>
using namespace std;
void swap(int* x , int* y){
    int temp = *x;
    *x = *y;
    *y = temp;
    return;
}
int main(){
    int a = 8 , b = 6;
    int* x = &a;
    int*y = &b;
    swap(x,y);
    cout<<a<<" "<<b;
}