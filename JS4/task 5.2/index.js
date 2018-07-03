const slider = () => {
    const slides = document.querySelectorAll(".slide");
    const smallSlides = document.querySelectorAll(".slide_small");
    let index = 0;

    const slide = (currentSlideIndex, nextSlideIndex, direction) => {
        slides[nextSlideIndex].style.left = (direction === "right") ? "100%" : "-100%";
        slides[nextSlideIndex].style.display = "block";

        setTimeout(() => {
            slides[currentSlideIndex].style.left = (direction === "right") ? "-100%" : "100%";
            slides[nextSlideIndex].style.left = "0%";
            smallSlides[currentSlideIndex].style.opacity = '0.6';
        }, 0);
        setTimeout(() => {
            slides[currentSlideIndex].style.display = "none";
            smallSlides[nextSlideIndex].style.opacity = '1';
        }, 400);
    }

    const slideRight = () => {
        if (index < slides.length - 1) {
            slide(index, ++index, "right");
        } else {
            index = 0;
            slide((slides.length - 1), index, "right");
        } 
    }

    const slideLeft = () => {
        if (index > 0 ) {
            slide(index, --index, "left");
        } else {
            index = slides.length - 1;
            slide(0, index, "left");
        }
    }

    const switchSliders = (e) => {
        const currentSlide = index;
        index = Array.from(smallSlides).indexOf(e.target);
        slide(currentSlide, index, "left");
    }

    const leftArrow = document.querySelector(".left");
    const rightArrow = document.querySelector(".right");

    leftArrow.addEventListener("click", slideLeft);
    rightArrow.addEventListener("click", slideRight);

    for (let i = 0; i < smallSlides.length; i++) {
        smallSlides[i].addEventListener("click", switchSliders);      
    }
}

slider();