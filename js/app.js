// References Slider >>>>>>>>>>>>>>>>>>

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    })   
    
// MobileNav Menu >>>>>>>>>>>>>>>>>>>>>>>>

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

// Snap/ scroll to sections on menu click >>>>>>>>>>

const scroll = new SmoothScroll('.social a[href*="#"]',{
    speed: 800
});


})

// GSAP Timeline >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".g-text", { y: "0%", duration: 2, stagger: 0.5 });
tl.to(".g-slider", { y: "-100%", duration: 2.0, delay: 1.0 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
tl.fromTo(".hero", { opacity: 0 }, { opacity: 1, duration: 1.5 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



