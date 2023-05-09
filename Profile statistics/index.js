const counter1=document.querySelectorAll(".counter");

counter1.forEach(counter1=>{
    counter1.innerText="0";
    incrementcounter();

    function incrementcounter(){
        let currentnum=+counter1.innerText;
        const dataceil=counter1.getAttribute("data-ceil");
        const increment=dataceil/15;
        currentnum=Math.ceil(currentnum+increment);

        if(currentnum<dataceil){
            counter1.innerText=currentnum;
            setTimeout(incrementcounter,50)
        }else{
            counter1.innerText=dataceil;
        }

    }
})