const magnifier=document.querySelector(".magnifier");
const micicon=document.querySelector(".mic-icon");
const input=document.querySelector(".input");
const search=document.querySelector(".search");

magnifier.addEventListener("click",()=>{
    search.classList.toggle("active");

})