// take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15

// #include<iostream>
// using namespace std;
// int main(){
//     cout<<"enter the value of n";
//     int n;
//     cin>>n;
//     if((n%5==0 || n%3==0) && n%15!=0){
//         cout<<"the number is divisible by 5 or 3 but not 15";
//     }
//     else{
//         cout<<"not matching the conditions";
//     }
//     return 0;
// }

// now from nested if else

#include <iostream>
using namespace std;
int main()
{
    cout << "enter an integer";
    int n;
    cin >> n;
    if (n % 5 == 0 || n % 3 == 0)
    {
        if (n % 15 != 0)
        {
            cout << "the number is divisible by 5 or 3 but not 15";
        }
        else
        {
            cout << "not matching condition";
        }
    }
    else
    {
        cout << "not match condition";
    }
    return 0;
}
