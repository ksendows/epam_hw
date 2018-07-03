const slider = () => {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector("#slider");
    let index = 0;
    let slideToShow;
    let slideToHide;
    let slideToAddOpacity;
    let slideToDeleteOpacity;

    const slide = (direction) => {        
        slideToShow.style.left = direction === "right" ? "93%" : "-31%";
        slideToShow.style.display = "block";

        setTimeout(() => {
            if (direction === "right") {
                slideToHide.style.left = "-31%";
                slideToAddOpacity.style.left = "0%";
                slideToDeleteOpacity.style.left = "31%";
                slideToShow.style.left = "62%";
            } else {
                slideToHide.style.left = "93%";
                slideToAddOpacity.style.left = "62%";
                slideToDeleteOpacity.style.left = "31%";
                slideToShow.style.left = "0%";
            }

            setTimeout(() => {
                slideToHide.style.display = "none";                
            }, 400);

            slideToAddOpacity.style.opacity = "0.7";
            slideToDeleteOpacity.style.opacity = "1";            
        }, 0); 
        return;
    }

    const slideRightGetSettings = () => {
        slideToHide = slides[index];
        slideToAddOpacity = slides[index + 1];
        slideToDeleteOpacity = slides[index + 2];

        if (index < slides.length - 3) {
            slideToShow = slides[index + 3];
        };
        if (index === slides.length - 3) {
            slideToShow = slides[0];
        };
        if (index === slides.length - 2) {
            slideToShow = slides[1];
            slideToDeleteOpacity = slides[0];
        };
        if (index === slides.length - 1) {
            slideToShow = slides[2];
            slideToDeleteOpacity = slides[1];
            slideToAddOpacity = slides[0];
            index = 0;
            slide("right");
            return;
        };
        index++;
        slide("right");
        return;
    }

    const slideLeftGetSettings = () => {
        slideToHide = slides[index + 2];
        slideToAddOpacity = slides[index + 1];
        slideToDeleteOpacity = slides[index];

        if (index === 0) {
            slideToShow = slides[slides.length - 1];
            index = slides.length - 1;
            slide("left");
            return;
        };
        if (index === slides.length - 1) {
            slideToShow = slides[index - 1];
            slideToHide = slides[1];
            slideToAddOpacity = slides[0];
        };
        if (index === slides.length - 2) {
            slideToShow = slides[index - 1];
            slideToHide = slides[0];
        };
        if (index > 0 && index !== slides.length - 2 && index !== slides.length - 1) {
            slideToShow = slides[index - 1];
        };
        index--;
        slide("left");
        return;
    }

    const leftArrow = document.querySelector(".left");
    const rightArrow = document.querySelector(".right");

    leftArrow.addEventListener("click", slideLeftGetSettings);
    rightArrow.addEventListener("click", slideRightGetSettings);

    return;
}

slider();
