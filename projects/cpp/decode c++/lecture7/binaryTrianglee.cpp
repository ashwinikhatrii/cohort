#include<iostream>
using namespace std;
int main(){
    int n ;
    cout<<" enter no . of rows : ";
    cin>>n;
    for(int i = 1;i<=n;i++){
        for(int j = 1;j<=i;j++){
            if((i+j)%2==0){
                cout<<1;
            }
            else {
                cout<<0;
            }
        }
        cout<<endl;
    }
    return 0;
}

/*
if(i==j) --> 1
if i&j both odd --> 1
 if i&j both even --> 1
 if ( (i+j)%2==0) 1 
 else 0
*/