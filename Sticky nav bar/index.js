const navbar1=document.querySelector(".navbar");

const bottomcontainer1=document.querySelector(".bottomcontainer");

window.addEventListener("scroll", () => {
    if(window.scrollY > bottomcontainer1.offsetTop - navbar1.offsetHeight - 50){
        navbar1.classList.add("active");
    }else{
        navbar1.classList.remove("active");   
    }
});
