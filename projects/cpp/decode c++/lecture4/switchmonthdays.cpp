#include<iostream>
using namespace std;
int main(){
    int x;
    cout<<"enter month number";
    cin>>x;
    switch (x){
        case 1:
        cout<<"31";
        break;
        case 2:
        cout<<"28";
        break;
        case 3:
        cout<<"31";
        break;
        case 4:
        cout<<"30";
        break;
        case 5:
        cout<<"31";
        break;
        case 6:
        cout<<"30";
        break;
        case 7:
        cout<<"31";
        break;
        case 8:
        cout<<"31";
        break;
        case 9:
        cout<<"30";
        break;
        case 10:
        cout<<"31";
        break;
        case 11:
        cout<<"30";
        break;
        case 12:
        cout<<"31";
        break;
        default:
        cout<<"invalid entry";
    }
    return 0;
}