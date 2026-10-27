#include<iostream>
using namespace std;
int main(){
    int n; 
    cout<<"Enter No. Of Stars : ";
    cin>>n;
    for(int i =1;i<=n;i++){
        for(int j = 1;j<=n;j++){
            if((i+j)>= n + 1){
                cout<<"*";
            }else cout<<" ";
        }
        cout<<endl;
    }
}

/*
// i+j == n+1 cout<<j

if(i+j >= n+1)
*/