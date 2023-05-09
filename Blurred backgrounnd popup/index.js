const container1=document.querySelector(".container");
const btn1=document.querySelector(".btn");
const popupcontainer1=document.querySelector(".popup-container");
const closeicon1=document.querySelector(".close-icon");

btn1.addEventListener("click",()=>{
    container1.classList.add("active");
    popupcontainer1.classList.remove("active");
})
closeicon1.addEventListener("click",()=>{
    container1.classList.remove("active");
    popupcontainer1.classList.add("active");
})