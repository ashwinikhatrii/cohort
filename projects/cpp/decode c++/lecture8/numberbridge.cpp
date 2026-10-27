#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter number of lines :";
    cin>>n;
    for(int i = 1;i<=2*n-1;i++){
        cout<<i;
    }
    cout<<endl;
    int m = n-1;
    int nsp = 1;
    for(int j = 1;j<=m;j++){
        int a = 1;
        for(int k = 1;k<=m+1-j;k++){
            cout<<a;
            a++;
        }
        // spaces 
        for(int l = 1; l<=nsp;l++){
            cout<<" ";
            a++;
        }
        nsp+=2;
        for(int k = 1;k<=m+1-j;k++){
            cout<<a;
            a++;
        }
        cout<<endl;
    }
}