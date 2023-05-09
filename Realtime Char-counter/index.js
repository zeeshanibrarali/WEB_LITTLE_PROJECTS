const textarea1=document.getElementById("textarea");
const totalcounter1=document.getElementById("total-counter");
const remaining1=document.getElementById("remaining");

textarea1.addEventListener("keyup", ()=>{
    updatecounter();

})

function updatecounter(){
    totalcounter1.innerText=textarea1.value.length;
    remaining1.innerText=textarea1.getAttribute("maxLength")-textarea1.value.length;

}