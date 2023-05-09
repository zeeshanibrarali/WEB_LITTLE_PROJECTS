const body1=document.querySelector("body");
body1.addEventListener("mousemove",(event)=>{
   console.log(event.offsetX);
   const xpos=event.offsetX;
   const ypos=event.offsetY;
   const span1=document.createElement("span");
   span1.style.left=xpos + "px";
   span1.style.top=ypos + "px";
    const size=Math.random()*100;
    span1.style.width=size+"px";
    span1.style.height=size+"px";

   body1.appendChild(span1);

   setTimeout(()=>{
    span1.remove();
   },3000)
})