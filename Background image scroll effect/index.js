const bgimage1=document.getElementById("bg-image");

window.addEventListener("scroll",()=>{
    updateimage();
})

function updateimage(){
    bgimage1.style.opacity=1-window.pageYOffset/900;
    bgimage1.style.backgroundSize=160-window.pageYOffset/10 + "%";
}