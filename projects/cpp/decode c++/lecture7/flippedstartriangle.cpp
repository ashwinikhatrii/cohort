/*
print the given pattern 

    *
   **
  ***       
 ****
 
  */
#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter number of rows:";
    cin >> n;
    for(int i = 1; i<=n; i++){
        // hashes or spaces 
        for(int j = 1;j<=n-i ;j++){
            cout<<" " ;
        }
        // stars 
        for(int k = 1;k<=i;k++){
            cout<<"*";
        }
        cout<<endl;
    }
}
