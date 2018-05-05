function showContent() {
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    let parent = document.querySelector("#articles");
    parent.appendChild(clon);
}

const button = document.body.querySelector("button");
button.addEventListener("click", showContent);

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.fillStyle = "#008B8B";
ctx.fillRect(0, 0, 80, 100);