const burger = document.body.querySelector(".burger-menu");
const menuLinks = document.body.querySelectorAll(".menu__item__link");

const switchBurger = () => {
    const menu = document.body.querySelector(".menu");
    menu.classList.toggle("menu--mobile-close");
    menu.classList.toggle("menu--mobile-open");
}

burger.addEventListener("click", switchBurger);

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", switchBurger);
}

function slideRight(slides, dots) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("slider__item--active")) {
            slides[i].classList.remove("slider__item--active");
            dots[i].classList.remove("slider__dot__item--active");
            if (i == slides.length - 1) { i = -1 };
            slides[i + 1].classList.add("slider__item--active");
            dots[i + 1].classList.add("slider__dot__item--active");
            break;
        }
    }
}

function slideLeft (slides, dots) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("slider__item--active")) {
            slides[i].classList.remove("slider__item--active");
            dots[i].classList.remove("slider__dot__item--active");
            if (i === 0) { i = slides.length };
            slides[i - 1].classList.add("slider__item--active");
            dots[i - 1].classList.add("slider__dot__item--active");
            break;
        }
    }
}

function slideDot (slides, dots, selectedDot) {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("slider__dot__item--active")) {
            // slides[i].classList.remove("slider__item--active");
            dots[i].classList.remove("slider__dot__item--active");
            activeDot.classList.add("slider__dot__item--active");
            for (let i = 0; i < dots.length; i++) {
                if (selectedDot === dots[i]) {

                }
            }
            // slides[i - 1].classList.add("slider__item--active");
            break;
        }
    }
}

function showDivs() {
    const slides = document.querySelectorAll(".slider__item");
    const dots = document.querySelectorAll(".slider__dot__item"); 

    if (event.target.classList.contains("slider__arrow__item--right")) {
        slideRight(slides, dots);
    } else if (event.target.classList.contains("slider__arrow__item--left")) {
            slideLeft(slides, dots)
        } else if (event.target.classList.contains("slider__dot__item")) {
            slideDot(slides, dots, event.target);   
        }
}

const arrowLeft = document.querySelector(".slider__arrow__item--left");
arrowLeft.addEventListener("click", showDivs);
const arrowRight = document.querySelector(".slider__arrow__item--right");
arrowRight.addEventListener("click", showDivs);
const dotsArr = document.querySelectorAll(".slider__dot__item");
for (let i=0; i < dotsArr.length; i++) {
    dotsArr[i].addEventListener("click", showDivs);
}


