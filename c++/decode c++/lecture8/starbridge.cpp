#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter no. of lines:";
    cin>>n;
    // 2n-1 stars 
    for(int z =1 ; z<=2*n-1;z++){
        cout<<"*";
    }
    cout<<endl;
    int nsp= 1;
    int m = n-1;// new lines 
    for(int i = 1;i<=m;i++){
        for(int j= 1; j<=m+1-i;j++){
            cout<<"*";
        }
        //spaces
        for(int k = 1; k<=nsp;k++){
            cout<<" ";
        }
        nsp+=2;
        // stars
        for(int j= 1; j<=m+1-i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}