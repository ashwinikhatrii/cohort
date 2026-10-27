#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    if(n==1){
        cout<<"monday";
    }else if(n==2){
        cout<<"tuesday";
    }else if(n==3){
        cout<<"wednesday";
    }else if(n==4){
        cout<<"thrusday";
    }else if(n==5){
        cout<<"friday";
    }else if(n==6){
        cout<<"saturday";
    }else if(n==7){
        cout<<"sunday";
    } else{
        cout<<"enter numbers only 1 to 7";
    }
}