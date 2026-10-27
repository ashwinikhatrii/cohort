#include<iostream>
using namespace std;
int main(){
    int n, m;
    cin>>n>>m;

    for(int i = 1; i<=m;i++) cout<<"*";
    cout<<endl;

    for(int i = 2;i<=n-1;i++){
        cout<<"*";
        // for spaces 
        for(int j = 1;j<=m-2;j++) cout<<" ";
        cout<<"*";

        cout<<endl;
    }
    for(int i = 1; i<=m;i++) cout<<"*";
}