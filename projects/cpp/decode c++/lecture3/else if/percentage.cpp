// take input marks of a student and print the grade according to marks:

#include<iostream>
using namespace std;
int main(){
    cout<<"enter the marks of the student to check its grade";
    int marks;
    cin>>marks;
    // if(marks>=91 && marks<=100 ){
    //     cout<<"excellent";
    // }
    // if(marks>=81 && marks<=90){
    //     cout<<"very good";
    // }
    // if(marks>=71 && marks<=80){
    //     cout<<"good";
    // }
    // if(marks>=61 && marks<=70){
    //     cout<<"can do better";
    // }
    // if(marks>=51 && marks<=60){
    //     cout<<"average";
    // }
    // if(marks>=40 && marks<=50){
    //     cout<<"below average";
    // }
    // if(marks<=40){
    //     cout<<"fail";
    // }


// if(marks>=91){
//     cout<<"excellent";
// }else{
//     if(marks>=81){
//         cout<<"very good";
//     }
//     else{
//         if(marks>=71){
//             cout<<"good";
//         }
//         else{
//             if(marks>=61){
//                 cout<<"can do better";
//             }else{
//                 if(marks>=51){
//                     cout<<"average";
//                 }
//                 else{
//                     if(marks>=41){
//                         cout<<"below average";
//                     }
//                     else{
//                         cout<<"fail";
//                     }
//                 }
//             }
//         }
//     }
// }


if(marks>=91){
    cout<<"excellent";
}else if(marks>=81){
    cout<<"very good";
}else if(marks>=71){
    cout<<"good";
}else if(marks>=61){
    cout<<"can do better";
}else if(marks>=51){
    cout<<" average";
}else if(marks>=41){
    cout<<"below average";
}else{
    cout<<"fail";
}
    return 0;
}


