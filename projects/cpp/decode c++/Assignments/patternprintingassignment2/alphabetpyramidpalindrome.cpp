#include<iostream>
using namespace std; 
int main(){
    int n;
    cout<<"Enter a number : ";
    cin>>n;
    for(int i = 1; i<=n;i++){
        // spaces 
        for(int j = 1; j<=n-i; j++){
            cout<<" ";
        }
        // alphabets 
        for(int k = i; k>=1;k--){
            cout<<char(k+64);
        }
        for(int l = 1; l<=i-1;l++){
            cout<<char(l+65);
        }
        cout<<endl;
    }
}