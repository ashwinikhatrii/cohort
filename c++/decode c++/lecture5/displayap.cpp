// display this ap - 1 3 5 7 9 .......  upto n terms 
#include<iostream>
using namespace std;
int main (){
 int n;
 cin>>n;
// for(int i = 1;i<=n; i++){
//     if(i%2!=0){
//         cout<<i<<endl;
//     }
// }
// for(int i = 1;i<=2*n-1;i+=2){
// cout<<i<<endl;
// }
int a = 1;
for(int i =1; i<=n; i++){
cout<<a<<endl;
a=a+2;
}
}