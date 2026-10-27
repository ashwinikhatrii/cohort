#include<iostream>
using namespace std;
int main(){
    // 0 1 1 2 3 5 8 13 21 34
    /*
    current = previous + last
    last += previous
    previous = current

    */
   int previous = 0;
   int last = 1;
   int current;
   cout<<previous<<" "<< last <<" ";
   for(int i=3;i<=6;i++){
    current= previous+last;
    cout<<current<<" ";
    previous = last;
    last = current;
   }

    return 0;
}