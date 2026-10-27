#include<iostream>
using namespace std;
int main(){
   int n;
   cout<<"Enter the number ";
   cin>>n;
   int i=1; // initialize
   do{
    cout<<i<<endl;
    i++; // update
   }while(i<=n); // break
    return 0;
}