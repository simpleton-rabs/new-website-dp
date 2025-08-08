//white sin wave variables
//coordinates for white circles sin wave
let x = 0;
let y = 0;
//angle value for sin function
let theta = 0;
//offset to increment angle
let thetaInc = 0.05;
//variables to animate - offset and increment
let offset = 0;
let offsetInc = 0.01;
// constants for amplitude/frequency of waves and diameter of circles
const AMP = 150;
const FREQ = 8;
const DIAMETER = 25;

//red cos wave variables
//coordinates for red squares cos wave
let x2 = 0;
let y2 = 0;
//angle value for cos function
let theta2 = 0;
//offset to increment angle
let thetaInc2 = 0.05;
//variables to animate - offset and increment
let offset2 = 0;
let offsetInc2 = 0.01;
// constants for amplitude/frequency of waves and diameter of circles
const AMP2 = 150;
const FREQ2 = 4;
const DIAMETER2 = 50;

//blue sin wave variables
//coordinates for blue elipse sin wave
let x3 = 0;
let y3 = 0;
//angle value for sin function
let theta3 = 0;
//offset to increment angle
let thetaInc3 = 0.05;
//variables to animate - offset and increment
let offset3 = 0;
let offsetInc3 = 0.01;
// constants for amplitude/frequency of waves and diameter of circles
const AMP3 = 150;
const FREQ3 = 1;
const DIAMETER3 = 50;

//variables for perlin noise stars
let xP = 0;
let yP = 0;

//variables and preload for sound
let mySound;
function preload() {
soundFormats('mp3');
 mySound = loadSound('sound/earthhum.mp3');
}

function setup() {
//set variable to canvas to allow event trigger on mouse press  
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed);
  frameRate(50);
//   //   noiseSeed(random(1000));
//   //   noiseSeed(150);
}

//function plays or stops sound if canvas pressed
function canvasPressed() {
  if(mySound.isPlaying() == true){
    mySound.stop();
  } else{
  mySound.loop(); 
  }
}

function draw() {

  background(0);
  
  //to display text to instruct to play/stop sound
  fill(255, 255, 255);
  if(mySound.isPlaying() == true){
    text ('Click canvas to stop sound', width/2, 20);
  } else{
  text ('Click canvas to start sound', width/2, 20);
}
//   background(0);

// Basic Perlin noise dots

  stroke(255, 215, 0);
  strokeWeight(1.5);
for (xP = 0; xP < width; xP += 0.5) {
    yP = height * noise(xP);
    point(xP, yP);
0  }
    noStroke();

// white circle sin wave going left
fill(255, 255, 255, 70);
  theta = offset;
  while (theta < TWO_PI * FREQ + offset) {
    y = sin(theta) * AMP;
    circle(x, y + height / 2, DIAMETER);
    theta += thetaInc;
    //offset is effectively moving the x coordinate and with background reset at beginning of draw function this will give appearance it is animating
    x = map(theta - offset, 0, TWO_PI * FREQ, 0, width);
  }

  //   to left
  offset += offsetInc;
  if (offset > TWO_PI) {
    offset = 0;
  }

//red cos wave going right and not continuous
  fill(255, 0, 0, 100);
  theta2 = offset2;
  while (theta2 < TWO_PI * FREQ2 + offset2) {
    y2 = cos(theta2) * AMP2;
    rect(x2, y2 + height / 2, DIAMETER2, DIAMETER2 / 2);
    theta2 += thetaInc2;
    //stop continuous by adding offset2 instead of minus 
    x2 = map(theta2 + offset2, 0, TWO_PI * FREQ2, 0, width);
  }
  //   to right
  offset2 += offsetInc2;
  if (offset2 > TWO_PI) {
    offset2 = 0;
  }

//blue sin wave going left
  fill(0, 0, 255, 70);
  theta3 = offset3;
  while (theta3 < TWO_PI * FREQ3 + offset3) {
    y3 = sin(theta3) * AMP3;
     ellipse(x3, y3 + height / 2, DIAMETER3, DIAMETER3 / 2);
    theta3 += thetaInc3;
    x3 = map(theta3 - offset3, 0, TWO_PI * FREQ3, 0, width);
  }
  //   to left
  offset3 += offsetInc3;
  if (offset3 > TWO_PI) {
    offset3 = 0;
  }

  //the end
}
