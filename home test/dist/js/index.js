"use strict";

var burger = document.body.querySelector(".burger-menu");
var menuLinks = document.body.querySelectorAll(".menu__item__link");

var switchBurger = function switchBurger() {
    var menu = document.body.querySelector(".menu");
    menu.classList.toggle("menu--mobile-close");
    menu.classList.toggle("menu--mobile-open");
};

burger.addEventListener("click", switchBurger);

for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", switchBurger);
}

function slideRight(slides, dots) {
    for (var _i = 0; _i < slides.length; _i++) {
        if (slides[_i].classList.contains("slider__item--active")) {
            slides[_i].classList.remove("slider__item--active");
            dots[_i].classList.remove("slider__dot__item--active");
            if (_i == slides.length - 1) {
                _i = -1;
            };
            slides[_i + 1].classList.add("slider__item--active");
            dots[_i + 1].classList.add("slider__dot__item--active");
            break;
        }
    }
}

function slideLeft(slides, dots) {
    for (var _i2 = 0; _i2 < slides.length; _i2++) {
        if (slides[_i2].classList.contains("slider__item--active")) {
            slides[_i2].classList.remove("slider__item--active");
            dots[_i2].classList.remove("slider__dot__item--active");
            if (_i2 === 0) {
                _i2 = slides.length;
            };
            slides[_i2 - 1].classList.add("slider__item--active");
            dots[_i2 - 1].classList.add("slider__dot__item--active");
            break;
        }
    }
}

function slideDot(slides, dots, selectedDot) {
    for (var _i3 = 0; _i3 < dots.length; _i3++) {
        if (dots[_i3].classList.contains("slider__dot__item--active")) {
            // slides[i].classList.remove("slider__item--active");
            dots[_i3].classList.remove("slider__dot__item--active");
            activeDot.classList.add("slider__dot__item--active");
            for (var _i4 = 0; _i4 < dots.length; _i4++) {
                if (selectedDot === dots[_i4]) {}
            }
            // slides[i - 1].classList.add("slider__item--active");
            break;
        }
    }
}

function showDivs() {
    var slides = document.querySelectorAll(".slider__item");
    var dots = document.querySelectorAll(".slider__dot__item");

    if (event.target.classList.contains("slider__arrow__item--right")) {
        slideRight(slides, dots);
    } else if (event.target.classList.contains("slider__arrow__item--left")) {
        slideLeft(slides, dots);
    } else if (event.target.classList.contains("slider__dot__item")) {
        slideDot(slides, dots, event.target);
    }
}

var arrowLeft = document.querySelector(".slider__arrow__item--left");
arrowLeft.addEventListener("click", showDivs);
var arrowRight = document.querySelector(".slider__arrow__item--right");
arrowRight.addEventListener("click", showDivs);
var dotsArr = document.querySelectorAll(".slider__dot__item");
for (var _i5 = 0; _i5 < dotsArr.length; _i5++) {
    dotsArr[_i5].addEventListener("click", showDivs);
}