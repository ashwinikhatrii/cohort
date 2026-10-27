#include<iostream>
using namespace std;
int main(){
    // int n =1971 ---- > 4

    // 45312 -----> 5

    // hint : int ki bat ho rehi hai 
    // n ko 10 se divide kar donn toh ek digit kam ho jaygee 

    
        int n;
        int count =0 ;
        cout<<"Enter a number : "<<endl;
        cin>>n;
        int a = n;
        while(n>0){
            n = n/10;
            count++;
        }
        if(a==0) cout<<1;
        else cout<<count;
    }
