// wap to find the circumference of a circle with radius 10 in c++?
#include<iostream>
using namespace std;
int main(){
    // c= 2 * pie * radius
    float pie = 3.14;
    int radius;
    cin>>radius;
    float circumference = 2 * pie *radius;
    cout<<circumference;
    return 0;
}