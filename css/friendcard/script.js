let istatus=document.querySelector("h5");
let btn=document.querySelector("#add");
let removeFriend=document.querySelector("#remove");

let flag=0;
btn.addEventListener('click',function(){

    if(flag==0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        console.log("done!");
        btn.innerHTML="remove";
        flag=1;
    }else{
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        flag=0;
        btn.innerHTML="add friends";
    }

})