const navElement = document.querySelector('.header__nav');
const hamburgerMenu = document.querySelector('.hamburger__menu');

hamburgerMenu.addEventListener('click', () => {
    navElement.classList.toggle('header__nav--open');
    hamburgerMenu.classList.toggle('hamburger__menu--open');
});