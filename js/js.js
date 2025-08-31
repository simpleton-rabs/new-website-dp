//JS specific to most of website

// create audio object
const soundTwo = new Audio("../sounds/sound2.mp3");
soundTwo.loop = true;
// const for speaker icon
const speakerIcon = document.getElementById("speaker");

//variable to show if hamburger is on or off
let hamburgerStatus = false;
//const for hamburger icon 
const hamburgerIcon = document.getElementById("hamburger");
// const navigation = document.getElementsByTagName("nav");
const navigation = document.getElementById("navbar");
console.log(navigation);
//event handler for if speaker icon is clicked
speakerIcon.onclick = () => {
//if sound paused change icon to speaker off and play sound
    if (soundTwo.paused){
        speakerIcon.src = "../menuimg/speakeroff.png";
        soundTwo.play();
//else sound must be playing so change icon to speaker on and pause sound        
    } else {
        speakerIcon.src = "../menuimg/speakeron.png";
        soundTwo.pause();
    }
}

hamburgerIcon.onclick = () => {
    if (!hamburgerStatus) {
        hamburgerIcon.src = "../menuimg/hamoff.png";
        navigation.style.left = "0%";
        navigation.style.position = "sticky";
        hamburgerStatus = true;
    } else {
        hamburgerIcon.src = "../menuimg/hamon.png";
        navigation.style.left = "-100%";
        navigation.style.position = "fixed";
        hamburgerStatus = false;
    }
    // navigation.display = "flex";
    // navigation.flex-direction = "column";
}
