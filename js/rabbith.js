//JS specific to Rabbit Hole

// array for the picture file names
const pictureFile = [
    "rabbith/one.png",
    "rabbith/two.gif",
    "rabbith/three.jpeg",
    "rabbith/four.gif",
    "rabbith/five.jpeg",
    "rabbith/six.jpeg",
    "rabbith/seven.jpeg",
    "rabbith/eight.jpeg",
    "rabbith/nine.jpeg",
    "rabbith/ten.png",
    "rabbith/eleven.jpeg",
];
// console.log(pictureFile);

//array for the picture descriptions 
const pictureCaption = [
    "This is something",
    "POVray 3D animation",
    "The world in my hand",
    "A gif animation I made for the band No Leader",
    "Story board for a flash animation Space Dude",
    "Story board for a flash animation Space Dude",
    "This used to be on my myspace profile",
    "Characters from an ideation task for my L6",
    "Graphics that I used in a flash animation Space Dude vs Green Monster",
    "An image I sketched on lined paper, I used chatGPT to take away the lines and polish it up.",
    "My old website graphics sketched by hand and scanned in",
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
    "To err is to be...?!",
    "Undefined or unrefined?",
    "Randomation in the Dum Dum Nation",
    "Whaaaaat?",
    "Radiation moves in concentric circles",
    "Go to 10",
    "Only the twinkling stars know the truth",
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

currentSlide.ontransitionend = setPic;

function plusOne() {
    // arrayIndex++;
    currentSlide.style.opacity = 0;
    currentSlide.style.transition = "opacity 2s ease-out";
    if (arrayIndex == pictureFile.length - 1) {
        arrayIndex = 0;
        // setPic();
        setGoad();
    } else{
        arrayIndex = arrayIndex + 1;
        // setPic();
        setGoad();
    } 
}

function minusOne() {
    // arrayIndex++;
    //fade out
        currentSlide.style.opacity = 0;
        currentSlide.style.transition = "opacity 1s ease-out";
    if (arrayIndex == 0) {
        arrayIndex = pictureFile.length -1;
        // setPic();
        setGoad();
    } else{
        arrayIndex = arrayIndex - 1;
        // setPic();
        setGoad();
    } 
}

//before chatGPT was prompted for fix for old gifs starting on last frame
/*function setPic(event) {
    currentSlide.src = pictureFile[arrayIndex];
    currentCaption.innerHTML = pictureCaption[arrayIndex];
    currentSlide.style.opacity = 1;
    currentSlide.style.transition = "opacity 2s ease-in";
}*/

function setPic() {
    let src = pictureFile[arrayIndex];
    //code to reset gifs courtest of chatGPT
    // If it's a GIF, force reload by adding a cache-busting query param
    if (src.endsWith(".gif")) {
        src += `?t=${Date.now()}`;
    }

    currentSlide.src = src;
    currentCaption.innerHTML = pictureCaption[arrayIndex];

    // Fade back in
    currentSlide.style.transition = "opacity 0.5s ease-in";
    currentSlide.style.opacity = 1;
}

//set goad text
function setGoad() {
    goadTextElement.innerHTML = goadText[Math.floor(Math.random() * goadText.length)];
}

