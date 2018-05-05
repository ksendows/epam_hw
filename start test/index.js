const burger = document.body.querySelector(".burger");
const menuLinks = document.body.querySelectorAll(".menu__item__link");

const switchBurger = () => {
    // debugger;
    const menu = document.body.querySelector(".menu");
    menu.classList.toggle("mobile--open");
}

burger.addEventListener("click", switchBurger);

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", switchBurger);    
}