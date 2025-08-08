
// create audio object
const soundOne = new Audio("../sounds/sound1.mp3");
soundOne.loop = true;
// const for speaker icon
const speakerIcon = document.getElementById("speaker");
// const for greeting
const greeTing = document.getElementById("greeting");
//var for date and time
var today = new Date();
var currentHour = today.getHours();
//event handler for if speaker icon is clicked
speakerIcon.onclick = () => {
//if sound paused change icon to speaker off and play sound
    if (soundOne.paused){
        speakerIcon.src = "../menuimg/speakeroff.png";
        soundOne.play();
//else sound must be playing so change icon to speaker on and pause sound        
    } else {
        speakerIcon.src = "../menuimg/speakeron.png";
        soundOne.pause();
    }
}
//set greeting as per current hour
if (currentHour >= 17) {
    greeTing.innerHTML = "Good Evening"
} else if (currentHour >= 12) {
    greeTing.innerHTML = "Good Afternoon";
} else if (currentHour >= 0){
    greeTing.innerHTML = "Good Morning";
} else {
    greeTing.innerHTML = "Welcome"
}