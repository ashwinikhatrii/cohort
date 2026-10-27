// take 3 positive integer input and print the greatest of them 

// twist   is don't use && ans || operator
#include<iostream>
using namespace std;
int main(){
    int a,b,c;
    cout<<"enter 1st number";
    cin>>a;
    cout<<"enter 2nd number";
    cin>>b;
    cout<<"enter 3rd number";
    cin>>c;
    if(a>b){
        if(a>c){
            cout<<"A is greatest";
        }
        else{ // c>a , a>b --> c>a>b
            cout<<c<<"  is greatest";
        }
    }
    else{// b>a
        if(b>c){
            cout<<b<<"  is greatest";
        }
        else{// c>b
            cout<<c<<"is greatest";
        }
    }
    return 0;
}