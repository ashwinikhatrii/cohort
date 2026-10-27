// write a program to check whether a character is an alphabet or not
#include<iostream>
using namespace std;
int main(){
    char ch;
    cout<<"enter the alphabet ";
    cin>>ch;
    // a , b , c ,A ,B ,C ..........
    // a to z --> 97 to 122
    // A to Z --> 65 to 90 
    int ascii = int(ch);
    if(ascii>=97 && ascii<=122 || ascii>=65 && ascii<=90){
        cout<<"the character is alphabet";
    }else{
        cout<<"character is not an alphabet";
    }
    return 0;
}