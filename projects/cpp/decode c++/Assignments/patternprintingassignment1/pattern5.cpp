#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter no of lines : ";
    cin>>n;
    for(int i = 1; i<=n;i++){
        // upper triangle
        for(int j= 1; j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }

    // lower triangle
    for(int i = 1; i<=n;i++){
        // upper triangle
        for(int j= 1; j<=n-i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}