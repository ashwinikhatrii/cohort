// print the sum of series : 1-2 + 3 - 4 + 5 - 6........ upto n 
#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter a number : ";
    cin>>n;
    int sum =0 ;
    // for(int i = 1;i<=n;i++){
    //     if(i%2!=0) sum +=i;
    //     else sum -= i;
    // }
    // cout<<sum;

    /*
    if n is even --> (1-2) + (3-4) + (5-6) .......((n-1) -n)
                      -1    +   -1  +   -1        +    -1
                      n/2times

                      sum = -n/2;


    case 2 : odd
    for ex --> n = 7;
    (1-2) + (3-4) + (5-6) + 7
    -1    +   -1  + -1   +7
    
    n/2times 


     sum   =   -n/2 + n 
    */

    if(n%2==0) sum+=-n/2;
    else sum = -n/2 + n ;
    cout<<sum;

}