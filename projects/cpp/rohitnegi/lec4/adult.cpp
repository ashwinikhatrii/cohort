#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"enter age to know the person is teenager or adult";
    cin>>n;
    if(n>=18){
        cout<<"adult";
    }
    else{
        cout<<"teenager";
    }
    return 0;
}