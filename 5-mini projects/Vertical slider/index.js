const slidercontainer=document.querySelector('.slider-container');
const leftslider=document.querySelector('.left-slider');
const rightslider=document.querySelector('.right-slider');
const upbutton=document.querySelector('.up-button');
const downbutton=document.querySelector('.down-button');
const slidelength=rightslider.querySelectorAll('div').length;

let activeSlideIndex=0;

leftslider.style.top=`-${(slidelength-1)*100}vh`;


upbutton.addEventListener('click',()=> changeslide('up'));
downbutton.addEventListener('click',()=> changeslide('down'));

const changeslide=(direction)=>{
    const slideheight=slidercontainer.clientHeight;
    if(direction==='up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidelength -1){
            activeSlideIndex=0;
        }
    }else if(direction==='down'){
        activeSlideIndex--;
        if(activeSlideIndex <0){
            activeSlideIndex=slidelength-1;
        }
    }

    rightslider.style.transform=`translateY(-${activeSlideIndex * slideheight}px)`;
    leftslider.style.transform=`translateY(${activeSlideIndex * slideheight}px)`;
}