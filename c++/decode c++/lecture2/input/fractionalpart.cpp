#include<iostream>
using namespace std;
int main(){
    float x ;
    cin>>x;//9.1
    int y = (int)x;//y = 9
    if(y<0) y = y-1;
    float z = (float)y;// z = 9
    x=x-z;
    cout<<x;
    return 0;
}