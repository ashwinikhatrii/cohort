// if cost price and selling price of an item is input through the keyboard, write a program to determine whether the seller has made profit or incurred loss .
#include<iostream>
using namespace std;
int main(){
    cout<<"enter the cost price";
    float cp;
    cin>>cp;
    cout<<"enter the selling price";
    float sp;
    cin>>sp;
    if(sp>cp){
        cout<<"profit"<<sp-cp;
    }
    if(cp>sp){
        cout<<"loss";
    }
    if(sp==cp){
        cout<<"no profit no loss"<<cp-sp;
    }
    return 0;
}