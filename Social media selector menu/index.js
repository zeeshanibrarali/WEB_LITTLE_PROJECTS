const menu1=document.querySelector(".menu");
const menutext=document.querySelector(".menu p");
const social=document.querySelector(".social-lists");
const list=document.querySelectorAll("li");
console.log(list);

menu1.addEventListener("click",()=>{
    social.classList.toggle("hide");
    menu1.classList.toggle("rotate");
});

list.forEach(list=>{
    list.addEventListener("click",()=>{
        menutext.innerHTML=list.innerHTML;
        social.classList.add("hide");
        menu1.classList.toggle("rotate");
    })
})