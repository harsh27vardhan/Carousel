const carousel = document.querySelector(".slider-container");
const dots = document.querySelectorAll(".dot")

const prev = document.getElementById("left");
const next = document.getElementById("right");

let counter = 0;
const slides = document.querySelectorAll(".slide");
slides.forEach((slide,index) => {
    slide.style.transform = `translateX(${index*100}%)`;
});

function slideImage(){
    slides.forEach((slide,index)=>{
        slide.style.transform = `translateX(${(index-counter)*100}%)`;
    });
}

prev.addEventListener("click",()=>{
    counter = (counter -1 + slides.length)%slides.length;
    // console.log(counter); 
    slideImage();
    updatePagination();
});

let nextTransition;
next.addEventListener("click",nextTransition=()=>{
    counter = (counter+1)%slides.length; 
    // console.log(counter);
    slideImage();
    updatePagination();
});

let continousFlow = setInterval(nextTransition,3000);
slides.forEach((slide)=>{
    slide.addEventListener("mouseover",()=>{
        console.log("enter");
        clearInterval(continousFlow);
    });
    slide.addEventListener("mouseleave",()=>{
        console.log("exit");
        continousFlow = setInterval(nextTransition,3000);
    });
});

function updatePagination(){
    console.log(counter);
    dots.forEach((dot,index)=>{
        if(index===counter){
            dot.classList.add("page-active");
        }
        else{
            dot.classList.remove("page-active");
        }
    });
}
updatePagination();
