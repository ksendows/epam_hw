let index = 1;

const trackMousePos = (e) => {
    let html;
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    let wrapperWidth = 55;
    let wrapperHeight = 50;

    if (e.clientY < wrapperHeight) {
        html = `<div class="point"></div>
                <div class="index">${index++}</div>
                <div class="coords">X: ${ e.clientX}</div>
                <div class="coords">Y: ${e.clientY}</div>`;
        wrapper.style.top = e.clientY + "px";
    } else {
        html = `<div class="index">${index++}</div>
                <div class="coords">X: ${ e.clientX}</div>
                <div class="coords">Y: ${ e.clientY}</div>
                <div class="point"></div>`;
        wrapper.style.top = (e.clientY - wrapperHeight) + "px";
    }
    wrapper.innerHTML = html;

    if (e.clientX > (window.innerWidth - wrapperWidth)) {
        wrapper.style.left = e.clientX - wrapperWidth + "px";
        wrapper.querySelector('.point').style.float = "right";

    } else wrapper.style.left = e.clientX + "px";

    document.body.appendChild(wrapper);
}


document.addEventListener("click", trackMousePos);