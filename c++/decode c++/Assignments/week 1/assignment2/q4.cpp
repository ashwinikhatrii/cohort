// wap for finding the volume of cylinder by taking radius and height as input .
#include<iostream>
using namespace std;
int main(){
// v = pie r^2 h
int radius , height ;
cout<<"Enter radius and height of cylinder respectively : ";
cin>>radius>>height;
 float volume = 0 ;
 volume = 3.14*radius*radius*height;
 cout<<"the volume of cylinder is " <<volume;
}