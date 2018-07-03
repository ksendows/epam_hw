const slider = () => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;
    let sliderTimerId;
    const time = 5000;
    let timePassed = 0;
    let timePaused = 0;
    let timeStart, timePauseStart;
    const bar = document.getElementById("slider_bar");
    let width = 1;
    const barInterval = 10;
    const step = (100 + barInterval) / (time / barInterval);
    let barTimerId;

    const slide = (currentSlide, nextSlide) => {
        nextSlide.style.left = "100%";
        nextSlide.style.display = "block";

        sliderTimerId = setTimeout(() => {
            currentSlide.style.left = "-100%";
            nextSlide.style.left = "0%";
            timePassed = 0;
            timePaused = 0;
            width = 1;
        }, 200);
        sliderTimerId = setTimeout(() => {
            currentSlide.style.display = "none";
        }, 600);
    }

    const animateBar = () => {
        bar.style.width = `${width}%`;
        width = width + step;
        if (width > 100) { 
            width = 1;
        }
        barTimerId = setTimeout(animateBar, barInterval);
    }

    const controlSlide = () => {
        if (index < slides.length - 1) {
            slide(slides[index], slides[index+1]);
            index++;
        } else {
            index = 0;
            slide(slides[slides.length - 1], slides[index]);
        }
        timeStart = new Date();
        sliderTimerId = setTimeout(controlSlide, time);
    }

    const pause = () => {
        clearInterval(sliderTimerId);
        clearInterval(barTimerId);
        timePauseStart = new Date();
        timePassed = timePauseStart - timeStart - timePaused;
    }

    const run = () => {
        if (timePassed > 0 && timePassed < time) {
            timePaused = timePaused + (new Date() - timePauseStart);
            sliderTimerId = setTimeout(controlSlide, time - timePassed);
            animateBar();
        } else {
            controlSlide();
            animateBar();
        }
    }

    const text = document.getElementById("slider_text");
    text.addEventListener("mouseover", pause);
    text.addEventListener("mouseout", run);

    sliderTimerId = setTimeout(controlSlide, time);
    timeStart = new Date();
    animateBar();
}
slider();
