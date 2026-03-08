// Scroll animation

const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

const trigger = window.innerHeight * 0.8;

if(cardTop < trigger){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});