$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    })   
    
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let closeSelection = document.querySelector('.close-selectionb');

hamberger.addEventListener('click',function(){
      mobileNav.classList.add('open')
});

times.addEventListener('click',function(){
     mobileNav.classList.remove('open')
})

closeSelection.addEventListener('click',function(){
    mobileNav.classList.remove('open')
});


})

const scroll = new SmoothScroll('.social a[href*="#"]',{
    speed: 800
});



