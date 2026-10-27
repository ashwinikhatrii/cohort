#include<iostream>
using namespace std;
int main(){
    int i = 1; 
    int n =10;
    while(i<=n){
        if(n%i == 0){
            cout<<i<<" ";
        }
        i++;
    }
}