const maxcount = document.querySelectorAll('.mySlide').length; 
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slide1 = document.getElementsByClassName('mySlides')[0];
const slide2 = document.getElementsByClassName('mySlides')[1];
const slide3 = document.getElementsByClassName('mySlides')[2];
const act1 = () => {slide1.style.display = "block"};

document.addEventListener("DOMContentLoaded", act1);

const prevSlide = () => {
    if(slide1.style.display === 'block'){
        slide1.style.display = 'none'; 
        slide3.style.display = 'block';
    }else if(slide2.style.display === 'block'){
        slide2.style.display = 'none'; 
        slide1.style.display = 'block';
    }else if(slide3.style.display === 'block'){
        slide3.style.display = 'none'; 
        slide2.style.display = 'block';
    }
}      

const nextSlide = () => {
    if(slide1.style.display === 'block'){
        slide1.style.display = 'none'; 
        slide2.style.display = 'block';
    }else if(slide2.style.display === 'block'){
        slide2.style.display = 'none'; 
        slide3.style.display = 'block';
    }else if(slide3.style.display === 'block'){
        slide3.style.display = 'none'; 
        slide1.style.display = 'block';
    }
}      



prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);