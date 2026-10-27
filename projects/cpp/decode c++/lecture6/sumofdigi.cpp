// wap to print sum of digits of a given number 
/*
steps: 
1 > last digit 
2> sum += lastdigit 
3> n/=10
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter a number :"<<endl;
    cin>>n;
    int lastdigit;
    int sum =0;
    while(n>0){
        lastdigit = n%10;
        sum = sum+lastdigit;
        n/=10;
    }
    cout<<sum;
}