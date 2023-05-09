const btn1=document.querySelector(".btn");
const closeicon1=document.querySelector(".close-icon");
const trailercontainer1=document.querySelector(".trailer-container");
const video1=document.querySelector("video")

btn1.addEventListener("click",()=>{
    trailercontainer1.classList.remove("active");
})

closeicon1.addEventListener("click",()=>{
    trailercontainer1.classList.add("active");
    video1.pause();
    video1.currentTime=0;
})