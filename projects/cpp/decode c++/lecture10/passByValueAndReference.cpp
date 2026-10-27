// pass by value 
// #include<iostream>
// using namespace std;
// void swap(int a , int b){
//     int temp = a;
//     a = b;
//     b = temp ;
//     return;

// }
// int main(){
//     int a,b;
//     cin>>a>>b;
//     swap(a,b);
//     cout<<a<<" "<<b;
// }

// pass by reference

#include<iostream>
using namespace std;
void swap(int* x , int* y){
    int temp = *x;
    *x = *y;
    *y = temp;
    return;
}
int main (){
    int a;
    int b;
    cin>>a>>b;
    swap(&a,&b);
    cout<<a<<" "<<b;
}