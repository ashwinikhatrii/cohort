#include<iostream>
using namespace std;
int main(){
    int arr[5] = {2,3,1,7,8};
    int a;
    cout<<sizeof(a)<<endl;
    cout<<sizeof(arr)<<endl;
    cout<<sizeof(arr)/sizeof(arr[0])<<endl;
    return 0;
}