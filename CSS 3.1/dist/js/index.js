"use strict";

// debugger;
var entry = document.querySelector(".entry");
var entryForm = document.querySelector(".entry-form");
var xEntryForm = entryForm.querySelector(".close");

var buttonMapArr = Array.from(document.querySelectorAll(".button__map"));
var mapFrame = document.querySelector(".contacts__map");

var formInputArr = Array.from(document.querySelectorAll(".form__input"));

// открытие/закрытие модальных окон с картой и формой входа
var openCloseModal = function openCloseModal(element, className) {
    element.classList.toggle(className);
    var blackout = document.querySelector(".blackout");
    blackout.classList.toggle("blackout--active");
};

entry.addEventListener("click", function () {
    return openCloseModal(entryForm, "entry-form--open");
});
xEntryForm.addEventListener("click", function () {
    return openCloseModal(entryForm, "entry-form--open");
});

buttonMapArr.forEach(function (buttonMap) {
    return buttonMap.addEventListener("click", function () {
        return openCloseModal(mapFrame, "contacts__map--open");
    });
});

if (mapFrame) {
    var xmapFrame = mapFrame.querySelector(".close");
    xmapFrame.addEventListener("click", function () {
        return openCloseModal(mapFrame, "contacts__map--open");
    });
}

// очищать значение инпутов при вводе
formInputArr.forEach(function (formInput) {
    return formInput.addEventListener("click", function () {
        return inputFillClean(formInput);
    });
});

// открывать/закрывать мобильное меню при нажатии на бургер
var burger = document.body.querySelector(".burger-menu");
var menuLinkArr = Array.from(document.body.querySelectorAll(".menu__link"));

var switchBurger = function switchBurger() {
    var menu = document.body.querySelector(".menu");
    menu.classList.toggle("menu__mobile--close");
    menu.classList.toggle("menu__mobile--open");
};

burger.addEventListener("click", switchBurger);

// закрывать мобильное меню при нажатии на пункт меню
menuLinkArr.forEach(function (menuLink) {
    return menuLink.addEventListener("click", switchBurger);
});

// если главная страница, убираем маленькое лого в хедере
var logo = document.querySelector(".logo");
if (logo) {
    var logoHeader = document.body.querySelector(".header__logo");
    logoHeader.classList.add("header__logo--hidden");
}

// выделять белой полоской активный пункт меню
var nav = document.querySelector(".navigation");
if (nav) {
    var navActive = nav.querySelectorAll(".navigation__point")[1];
    menuLinkArr.forEach(function (menuLink) {
        if (menuLink.innerHTML.toLowerCase() == navActive.innerHTML.toLowerCase()) {
            menuLink.parentElement.classList.add("menu__item--active");
        }
    });
}