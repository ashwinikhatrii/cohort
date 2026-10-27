// write a program to check whether a given character is a vowel or a 
//consonent

#include<iostream>
using namespace std;
int main(){
    char ch;
    cout<<"enter the character:";
    cin>>ch;
    int ascii = (int)ch;
    if(ascii>=97 && ascii<=122 || ascii>=65 && ascii<=90){
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch=='o' || ch =='u'){
            cout<<"the character is vowel";
        }
        else{
            cout<<"the character is consonent";
        } 

    }else{
        cout<<"the character is not a alphabet";
    }
    return 0;
}