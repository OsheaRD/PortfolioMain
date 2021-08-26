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



// MODAL >>>>>>>>>>>>>>>>>>>>>>>>


const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");


modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});

// Maybe also close with "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") { // alternatively: if(modal.classList.contains("modal-show"))
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown - in this case: "initial" <=> "visible"
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}


function msgAlert() {
  alert("Your message has been sent!");
}