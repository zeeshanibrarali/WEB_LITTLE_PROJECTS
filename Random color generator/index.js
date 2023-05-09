const container1=document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorcontainer1=document.createElement("div");
    colorcontainer1.classList.add("colorcontainer");
    container1.appendChild(colorcontainer1);
}

const colorcontainers1=document.querySelectorAll(".colorcontainer");
colorgenerator();

function colorgenerator(){
    colorcontainers1.forEach((colorcontainer1)=>{
        const newcolorcode= randomcolor();
        colorcontainer1.style.backgroundColor="#" + newcolorcode;
        colorcontainer1.innerText="#"+newcolorcode;
    })
}
    
function randomcolor(){
        const chars="0123456789abcdef";
        const colorcodelength=6;
        let color="";
        for (let index = 0; index < colorcodelength; index++) {
            const random=Math.floor(Math.random() * chars.length);
            color +=chars.substring(random, random +1);                                   
        }
        return color;
}