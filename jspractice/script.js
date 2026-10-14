let inp=document.querySelector("input");
let span=document.querySelector("span");

inp.addEventListener("input",function(dets){
    let count= 20 - inp.value.length;
    span.textContent=count;
    if(count<=0){
        span.style.color="red";
    }
    else{
        span.style.color="white";
    }

});