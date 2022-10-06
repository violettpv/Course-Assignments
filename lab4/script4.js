const tenthEl = document.getElementById("tenth-element");
const eleventhEl = document.querySelector(".eleventh-element"); // get the 1st element with class="eleventh-element"

function randomNum() {
    return Math.floor(Math.random() * 255);
}
function randomColor() {
    return 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
}

let changeColorsById = () => {
    tenthEl.style.background = randomColor();
    tenthEl.style.color = randomColor();
};
let changeColorsQuerySelector = () => {
    eleventhEl.style.background = randomColor();
    eleventhEl.style.color = randomColor();
};

const dubaiImg = document.getElementById("dubai-img");
const dubaiHref = document.getElementById("dubai-href");
const imgDiv = document.getElementsByClassName("img-div")[0];
const images = [];
images.push(dubaiImg.id);

function addImage() {
    if (images.length > 1) {
        alert("You can only add 1 image.");
        return false;
    }
    let newImg = document.createElement("img");
    newImg.src = "../pics/dubai.jpg";
    newImg.alt = "dubai2";
    newImg.id = "dubai2-img";
    newImg.style.width = "700px";
    newImg.style.height = "auto";
    imgDiv.appendChild(newImg);
    images.push(newImg.id);
}

function zoomIn() {
    let imageIndex = images.length - 1;
    let imageId = images[imageIndex];
    let currImage = document.getElementById(imageId);
    let currWidth = currImage.clientWidth;
    if (currWidth == 2500) return false;
    else {
        currImage.style.width = (currWidth + 100) + "px";
    }
}

function zoomOut() {
    let imageIndex = images.length - 1;
    let imageId = images[imageIndex];
    let currImage = document.getElementById(imageId);
    let currWidth = currImage.clientWidth;
    if (currWidth == 100) return false;
    else {
        currImage.style.width = (currWidth - 100) + "px";
    }
}

function removeImage() {
    let imageIndex = images.length - 1;
    let imageId = images[imageIndex];
    let currImage = document.getElementById(imageId);
    images.pop();
    currImage.remove();
    
}