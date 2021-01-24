const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu__items--open');
});

const hideHamburger = (isDesktop) => {
    if (isDesktop) {
        menu.classList.remove('menu__items--open');
        hamburger.classList.remove('hamburger--active');
    }
}

let desktopViewport = window.matchMedia("screen and (min-width: 1024px)");

desktopViewport.addListener(isDesktop => {
    hideHamburger(isDesktop.matches);
});


const menuFixed = document.querySelector(".menu");

window.addEventListener("scroll", () => {
    if (document.scrollingElement.scrollTop > 150) {
        menuFixed.classList.add("menu--fixed");
    } else {
        menuFixed.classList.remove("menu--fixed");
    }
});