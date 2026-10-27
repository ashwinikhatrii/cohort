// given the marks of the student . if the marks are greater than 33 print the result as pass otherwise fail without using if-else statement

#include <iostream>
using namespace std;
int main(){
    int marks;
    cout<<"enter marks obtained";
    cin>> marks;
    marks>33 ? cout<<"pass" : cout<<"fail";
    return 0;
}