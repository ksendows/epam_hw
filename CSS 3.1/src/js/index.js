// debugger;
const entry = document.querySelector(".entry");
const entryForm = document.querySelector(".entry-form");
const xEntryForm = entryForm.querySelector(".close");

const buttonMapArr = Array.from(document.querySelectorAll(".button__map"));
const mapFrame = document.querySelector(".contacts__map");  

const formInputArr = Array.from(document.querySelectorAll(".form__input"));

// открытие/закрытие модальных окон с картой и формой входа
const openCloseModal = function (element, className) {
    element.classList.toggle(className); 
    const blackout = document.querySelector(".blackout"); 
    blackout.classList.toggle("blackout--active");  
};

entry.addEventListener("click", () => openCloseModal(entryForm, "entry-form--open"));
xEntryForm.addEventListener("click", () => openCloseModal(entryForm, "entry-form--open"));

buttonMapArr.forEach((buttonMap) => 
    buttonMap.addEventListener("click", () => openCloseModal(mapFrame, "contacts__map--open")));

if (mapFrame) {
    const xmapFrame = mapFrame.querySelector(".close");
    xmapFrame.addEventListener("click", () => openCloseModal(mapFrame, "contacts__map--open"));
} 

// очищать значение инпутов при вводе
formInputArr.forEach((formInput) => 
    formInput.addEventListener("click", () => inputFillClean(formInput)));

// открывать/закрывать мобильное меню при нажатии на бургер
const burger = document.body.querySelector(".burger-menu");
const menuLinkArr = Array.from(document.body.querySelectorAll(".menu__link"));

const switchBurger = () => {
    const menu = document.body.querySelector(".menu");
    menu.classList.toggle("menu__mobile--close");
    menu.classList.toggle("menu__mobile--open");
}

burger.addEventListener("click", switchBurger);

// закрывать мобильное меню при нажатии на пункт меню
menuLinkArr.forEach((menuLink) =>
    menuLink.addEventListener("click", switchBurger));

// если главная страница, убираем маленькое лого в хедере
const logo = document.querySelector(".logo");
if (logo) {
    const logoHeader = document.body.querySelector(".header__logo");
    logoHeader.classList.add("header__logo--hidden");
}

// выделять белой полоской активный пункт меню
const nav = document.querySelector(".navigation");
if (nav) {
    const navActive = nav.querySelectorAll(".navigation__point")[1];
    menuLinkArr.forEach((menuLink) => {
        if (menuLink.innerHTML.toLowerCase() == navActive.innerHTML.toLowerCase()) {
            menuLink.parentElement.classList.add("menu__item--active");
        }
    })
}
