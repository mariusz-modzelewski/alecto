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

class Slider {
    constructor() {
        this.slides = null;
        this.slidesDots = null;
        this.slideButtons = null;
        this.currentSlide = 1;
        this.slidesLength = 0;
    }

    initializeSlider() {
        this.slides = document.querySelectorAll('.slider__slide');
        this.slidesDots = document.querySelectorAll('.slider__slide-dot');

        this.slidesLength = document.querySelectorAll('.slider__slide').length;
        this.slideButtons = document.querySelectorAll('slider__slide-dot');

        setInterval(() => {
            this.currentSlide++;

            const slide = document.querySelector('.slider__slide.slider__slide--active');
            const slideDot = document.querySelector('.slider__slide-dot.slider__slide-dot--active');
            slide.classList.remove('slider__slide--active');
            slideDot.classList.remove('slider__slide-dot--active');


            if(this.currentSlide > this.slidesLength) {
                this.slides[0].classList.add('slider__slide--active');
                this.slidesDots[0].classList.add('slider__slide-dot--active');
                this.currentSlide = 1;
            } else {
                slide.nextElementSibling.classList.add('slider__slide--active');
                slideDot.nextElementSibling.classList.add('slider__slide-dot--active');
            }
        }, 2000);
    }
}

const slider = new Slider();
slider.initializeSlider();