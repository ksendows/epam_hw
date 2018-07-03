const toggleMenu = e => {
    e.preventDefault();

    const textWrapper = e.target.nextElementSibling;
    const textItems = document.querySelectorAll(".text_wrapper");
    
    if (textWrapper.style.maxHeight === "") {
        
        for (i = 0; i < textItems.length; i++) {
            textItems[i].style.maxHeight = "";
            textItems[i].children[0].style.opacity = "0";
        }
        
        textWrapper.style.maxHeight = "100px";
        setTimeout(() => {
            textWrapper.children[0].style.opacity = "1";
        }, 1000);

    } else {
        textWrapper.style.maxHeight = "0px";
        textWrapper.children[0].style.opacity = "0";
    }   

}

const menuItems = document.querySelectorAll(".menu_item");
for (i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", toggleMenu);
}

