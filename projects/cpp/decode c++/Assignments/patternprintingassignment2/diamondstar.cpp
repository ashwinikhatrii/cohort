#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"enter no of lines:";
    cin>>n;
    int m = 2*n-1;
    for(int i = 0;i<m;i++){
        for(int j = 0;j<m;j++){
            // only for stars printing 
            if( i ==m/2 or j == m/2 or abs(i-j) == m/2 or i+j == m/2 or i+j == 3*(n-1)) cout<<"*";
            else cout<<" ";
        }
        cout<<endl;
    }
}