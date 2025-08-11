// array for the picture file names
const pictureFile = [
    "../rabbith/one.png",
    "../rabbith/two.gif",
    "../rabbith/three.jpeg",
    "../rabbith/four.gif",
    "../rabbith/five.jpeg",
    "../rabbith/six.jpeg",
    "../rabbith/seven.jpeg",
    "../rabbith/eight.jpeg",
    "../rabbith/nine.jpeg",
];
// console.log(pictureFile);

//array for the picture descriptions 
const pictureCaption = [
    "This is something",
    "POVray animation",
    "The world in my hand",
    "A gif animation I made for the band No Leader",
    "Story board for a flash animation",
    "Story board for a flash animation",
    "This used to be on my myspace profile",
    "Characters from an ideation task for my L6",
    "Graphics that I used in a flash animation",
];
// console.log(pictureCaption);

//index for both arrays
let arrayIndex = 0;

// array for random texts
const goadText = [
    "Do you go forwards or do you go backwards?  <br/> Please press the arrows.",
    "Do you go upwards or downwards? <br/> Please press the arrows.",
    "Does the end become the beginning?",
    "How long is a piece of string?",
    "Too many questions and not enough answers?",
    "Do you see red? Or do you see green?",
    "Did you take the red pill?",
    "Who are we?",
    "Nice to be here?",
    "Lost?",
    "What's the time Mr Wolf?",
    "ERROR!",
];

//set up H2 on load
//variable to access h2 goading element
const goadTextElement = document.getElementById("goading");
// console.log(goadTextElement);

//index for array for random texts
let goadTextIndex;

//variable to access object to check if portrait
let portrait = window.matchMedia("(orientation: portrait)");
console.log(portrait);

//if portrait we want goading text to start at no 1 not 0
if (!portrait.matches) {
    goadTextIndex = 0;
    goadTextElement.innerHTML = goadText[goadTextIndex];
} else {
    goadTextIndex = 1;
    goadTextElement.innerHTML = goadText[goadTextIndex];
}
// console.log("GTI IS " + goadTextIndex);
//variables to access arrows
upArrow = document.getElementById("up");
leftArrow = document.getElementById("left");
rightArrow = document.getElementById("right");
downArrow = document.getElementById("down");
//variables for slide and caption
let currentSlide = document.getElementById("slide");
let currentCaption = document.getElementById("caption");

// listeners
upArrow.onclick = () => {
    minusOne();
};

leftArrow.onclick = () => {
    minusOne();
};

rightArrow.onclick = () => {
    plusOne();
};

downArrow.onclick = () => {
    plusOne();
};

currentSlide.onclick = () => {
    plusOne();
};





// let imgSrc = document.getElementById(slide);

// let figCaption =

// const rightArrow =

// const leftArrow =

// rightArrow.onClick

// leftArrow.onClick

function plusOne() {
    // arrayIndex++;
    if (arrayIndex == pictureFile.length - 1) {
        arrayIndex = 0;
        currentSlide.src = pictureFile[arrayIndex];
        currentCaption.innerHTML = pictureCaption[arrayIndex];
        setGoad();
    } else{
        arrayIndex = arrayIndex + 1;
        currentSlide.src = pictureFile[arrayIndex];
        currentCaption.innerHTML = pictureCaption[arrayIndex];
        setGoad();
    } 
}

function minusOne() {
    // arrayIndex++;
    if (arrayIndex == 0) {
        arrayIndex = pictureFile.length -1;
        currentSlide.src = pictureFile[arrayIndex];
        currentCaption.innerHTML = pictureCaption[arrayIndex];
        setGoad();
    } else{
        arrayIndex = arrayIndex - 1;
        currentSlide.src = pictureFile[arrayIndex];
        currentCaption.innerHTML = pictureCaption[arrayIndex];
        setGoad();
    } 
}

function setGoad() {
    goadTextElement.innerHTML = goadText[Math.floor(Math.random() * goadText.length)];
}

