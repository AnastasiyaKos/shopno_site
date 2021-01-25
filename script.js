let menuButton = document.querySelector('.menu');
let navMenu = document.querySelector('.nav-menu');
let closeButton = document.querySelector('.close');

menuButton.addEventListener('click', e => {
    navMenu.classList.remove('visually-hidden');
    menuButton.classList.add('visually-hidden');
    closeButton.classList.remove('visually-hidden');
})

closeButton.addEventListener('click', e => {
    navMenu.classList.add('visually-hidden');
    menuButton.classList.remove('visually-hidden');
    closeButton.classList.add('visually-hidden');
})





