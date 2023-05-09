const imagecontainer1=document.querySelector(".image-container");
const prev1=document.getElementById("prev");
const next1=document.getElementById("next");

let x=0;
let timer;
prev1.addEventListener("click",()=>{
    x=x + 45;
    clearTimeout(timer);
    updategallery();
})
next1.addEventListener("click",()=>{
    x=x - 45;
    clearTimeout(timer);
    updategallery();
})

function updategallery(){
    imagecontainer1.style.transform=`perspective(1000px) rotateY(${x}deg)`;
    timer=setTimeout(()=>{
        x=x-45;
        updategallery();
    },3000);
}

updategallery();