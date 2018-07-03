const menuButton = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__container");
const loader = document.querySelector(".loader");


const toggleMenu = e => { 
    if (menuButton.textContent === "Menu") {
        loader.style.left = '100%';
        setTimeout(() => {
            menu.style.display = "flex";
            menuButton.textContent = "Close";
        }, 2000);
    } else {
        menu.style.display = "none";
        loader.style.left = '-100%';
        setTimeout(() => {
            menuButton.textContent = "Open";
        }, 2000);
    }

}
menuButton.addEventListener("click", toggleMenu);


const handlerHover = e => {
    const value = e.target.textContent;
    const slides = document.querySelectorAll(".slide");

    const hideAllSlides = () => {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.opacity = "0";
        }
    }
    const showSlide = (slideNumber) => {
        hideAllSlides();
        slides[slideNumber].style.display = "block";
        setTimeout(() => {
            slides[slideNumber].style.opacity = "1"; 
        }, 0);
    }
    switch (value) {
        case "WORK":
            showSlide(0);
            break;
        case "AGENCY":
            showSlide(1);
            break;
        case "SERVICES":
            showSlide(2);
            break;
        case "CAREERS":
            showSlide(3);
            break;
        case "CONNECT":
            showSlide(4);
            break;   
        default:
            break;
    }
}

const menuItems = document.querySelectorAll(".menu__link");
for (i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("mouseover", handlerHover);;
}
