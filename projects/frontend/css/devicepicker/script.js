let sel=document.querySelector("select");
let device=document.querySelector("#device");

sel.addEventListener("change",function(dets){
    device.textContent=`${dets.target.value} device selected`;
    console.log(`${dets.target.value} device selected`)
    
})