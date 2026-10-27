#include<iostream>
using namespace std;
int main(){
    int n,sum=0;
    cout<<"Enter the number till which you want its sum";
    cin>>n;
    for(int i= 1;i<=n;i++){
        sum=sum+i;
    }
    cout<<"The sum is"<<sum<<endl;
    return 0;
}

/*
n*(n+1)/2
*/

/*
sum square = sum= sum+i*i
*/