"use strict";

// открывать/закрывать мобильное меню при нажатии на бургер
var burger = document.body.querySelector(".menu__burger");
var menuLinkArr = Array.from(document.body.querySelectorAll(".menu__link"));

var switchBurger = function switchBurger() {
    var menu = document.body.querySelector(".menu");
    menu.classList.toggle("menu__mobile--close");
    menu.classList.toggle("menu__mobile--open");
    // пункты меню приводим к одному внешнему виду
    menuLinkArr.forEach(function (menuLink) {
        menuLink.classList.add("menu__link--uppercase");
        menuLink.classList.remove("menu__link--italic");
    });
};

burger.addEventListener("click", switchBurger);