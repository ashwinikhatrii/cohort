/*
 print the given pattern 

 ****
 ****
 ****
 ****

*/

#include<iostream>
using namespace std;
int main(){
    int n ;
    cout<<"enter no of sides of  square: ";
    cin>>n;
    for(int i = 1;i<=n; i++){
        for(int j= 1;j<=n;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}