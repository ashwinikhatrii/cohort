#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<" enter no . of lines : ";
    cin>>n;
    for(int i = 1; i<=n-1;i++){
        cout<<" ";
    }
    cout<<"*";
    cout<<endl;
    // upper triangle
    for(int i = 2;i<=n-1;i++){
        // spaces 
        for(int j = 1;j<=n-i;j++) cout<<" ";

        cout<<"*";

        // spaces 
        for(int j = 1; j<=2*(i-1)-1;j++) cout<<" ";

        cout<<"*";

        cout<<endl;
    }


    // lower triangle
        for(int i = 1; i<=n-1;i++){
        // spaces 
        for(int j= 1; j<i;j++) cout<<" ";
        cout<<"*";
        // spaces 
        int m = 2*(n-i);
        for(int j =1; j<m;j++) cout<<" ";

        cout<<"*";
        cout<<endl;
    }
    for(int i = 1;i<=n-1;i++) cout<<" ";
    cout<<"*";
}