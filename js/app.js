$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    })
})


const scroll = new SmoothScroll('.social a[href*="#"]',{
    speed: 800
});
