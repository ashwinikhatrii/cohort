#include<bits/stdc++.h>  //  universal header file
using namespace std;
int main(){
    int n;
    cin>>n;
    // upper half 
    for(int i = 1; i<=n-1;i++){
        // stars 
        for(int j = 1; j<=i; j++){
            cout<<"*";
        }
        // spaces
        for(int j = 1; j<=2*(n-i)-1;j++){
            cout<<" ";
        }
        // stars 
        for(int j = 1; j<=i;j++) cout<<"*";

        cout<<endl;
    }
    for(int i = 1; i<=2*n-1;i++){
        cout<<"*";
    }
    cout<<endl;

    // lower half
    for(int i = 1; i<=2*n-1;i++){
        cout<<"*";
    }
    cout<<endl;

    for(int i = 1; i<=n-1;i++){
        // stars 
        for(int j =1;j<=n-i;j++) cout<<"*";
        // space 
        for(int j =1; j<=2*i-1;j++) cout<<" ";
        // stars 
        for(int j = 1; j<=n-i;j++) cout<<"*";
        cout<<endl;
    }
}