#include<iostream>
using namespace std;
void swap(int a , int b){
    int temp = a;
    a = b;
    b = temp;
    return;
}
int main(){
    int a, b;
    cin>>a>>b;
    swap(a,b);
    cout<<a<<" "<<b;
}


// this will now work because this is performing pass by value , not pass by reference 