const btn1=document.querySelector(".btn");
const input1=document.getElementById("input");
const icon1=document.querySelector(".fa-copy");
const alert=document.querySelector(".alert-container");

btn1.addEventListener("click",()=>{
    createpassword();
})

icon1.addEventListener("click",()=>{
    copypassword();
    if(input1.value){
        alert.classList.remove("active");
        setTimeout(()=>{
            alert.classList.add("active");
        },2000)
    }
   
})

function createpassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordlength=14;
    let password="";
    for (let index = 0; index < passwordlength; index++) {
        const randomnumber=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomnumber,randomnumber+1);
        console.log(randomnumber,password);       
    }

    input1.value=password;
    alert.innerText=password + " copied!"
}

function copypassword(){
    input1.select();
    navigator.clipboard.writeText(input1.value);
}