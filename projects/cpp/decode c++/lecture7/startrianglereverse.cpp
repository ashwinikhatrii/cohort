/*

****
***
**
*

//  no of rows+ no . of stars = n +1
no of stars =  n + 1 + i

*/
#include<iostream>
using namespace std;
int main(){
    int n ;
    cout<<"Enter no of rows : ";
    cin>>n;
    // no of stars = n +1 - i
    for(int i = 1;i<=n;i++){
        for(int j = 1;j<=n+1-i; j++){
            cout<<"*";
        }
        cout<<endl;
    }
}