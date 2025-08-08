function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(1350, windowHeight);
  angleMode(DEGREES);
  background(0);
  frameRate(0.5);
  // noLoop();
  textFont("Pangolin", 30);
}

function draw() {
  //array for colours as don't want it to be truly random
  const colours = [
    "black",
    "red",
    "yellow",
    "navy",
    "orange",
    "black",
    "green",
    "white",
    "grey",
  ];

  //index for colours array set to random point in array
  let coloursIndex = round(random(colours.length - 1));

  //values for rectangles on left side - will have words in them
  //set width and height of rectangles
  let recWidth = 200;
  let recHeight = 100;
  //top left coordinate of first rectangle
  let recX = 5;
  let recY = 5;

  // array for words
  const words = [
    "WONDEROUS",
    "BECOME",
    "AOHELL",
    "LUNAR",
    "RGB",
    "STRONG",
    "KITKAT",
    "ENTERTAIN",
    "CHANGE",
    "SOCIAL",
    "ARTSY",
    "SPACE",
    "BEAUTEOUS",
    "JOY",
    "ROYGBIV",
  ];

  //index for words - set to random number on load
  let wordsIndex = round(random(words.length - 1));

  //values for middle quadrangle - where first set of phrases will appear
  //first coordinate to be next to top right of rectangles
  let quadX1 = recX + recWidth + 20;
  let quadY1 = recY;
  //second third coordinates to make quadrangle right side appear distance twice width of rectangle but same height of rectangles
  let quadX2 = quadX1 + 2 * recWidth;
  let quadY2 = quadY1 - recHeight;
  let quadX3 = quadX2;
  let quadY3 = quadY1;
  //fourth coordinate to be next to bottom right of squares
  let quadX4 = quadX1;
  let quadY4 = quadY1 + recHeight;

  //array for first set of phrases
  const phrases1 = [
    "PARTING THE WAVES",
    "BEING THE BEST I CAN",
    "YOU'RE ENTERTAINED",
    "I WON'T BE AFRAID",
    "LOST WITHOUT YOU",
    "THE QUICK BROWN FOX",
    "FOCUS POCUS",
    "MY REMOTE CONTROL LIFE",
    "YOUR WAY IS NEVER LOST",
    "THERE THERE",
    "A ROADMAP TO NO WHERE",
    "HASHTAG SYMPATHY",
    "GROWTH MINDSET",
    "BLUE SKY THINKING",
    "EVERYTHING IS A RAINBOW",
  ];

  //index for first set of phrases - set to random number on load
  let phrases1Index = round(random(phrases1.length - 1));
  //coordinates for first set of phrases
  let phrases1X = quadX1;
  let phrases1Y = quadY1 + recHeight / 4;

  //values for right quadrangles - where 2nd set of phrases will appear
  let nquadX1 = quadX2 + 20;
  let nquadY1 = quadY2;
  let nquadX2 = nquadX1 + 3.5 * recWidth;
  let nquadY2 = quadY1;
  let nquadX3 = nquadX2;
  let nquadY3 = quadY4;
  let nquadX4 = quadX3 + 20;
  let nquadY4 = quadY3;

  //array for 2nd set of phrases
  const phrases2 = [
    "I WANTED TO BE FREE OF THE NEGATIVITY",
    "YOU ARE NOW CROWNED",
    "KING OF ALL MY GHOSTS",
    "YOU ARE THE NIGHT AND I AM THE SUN",
    "THE OTHER LIFE BEYOND THE NINE TO FIVE",
    "RADIATION MOVES IN CONCENTRIC SPHERES",
    "SOULS HEARTS MINDS ENTWINED",
    "BETWEEN EAST ANGLIA AND EAST LONDON",
    "DO YOU SEE RED OR DO YOU SEE GREEN?",
    "OR SOMETHING INBETWEEN SHORTSIGHTED MAN",
  ];

  // index for 2nd set of phrases - set to random number on load
  let phrases2Index = round(random(phrases2.length - 1));
  //coordinates for 2nd set of phrases
  let phrases2X = nquadX1 + 10;
  let phrases2Y = nquadY1 + recHeight;

  noStroke();

  //draw left hand squares with words on top
  //colours and words chosen at randome from arrays to interate sequentially

  for (let i = 0; i < 10; i++) {
    //call function to choose colour
    colourChoose(coloursIndex);
    // draw square with colour from colours array
    rect(recX, recY, recWidth, recHeight, 5);
    //text to appear on rectangles - if text moved up one rectangle height - it will affectively take colour of following rectangle and will be visible
    textAlign(CENTER);
    //if statement like colours index to check if words index on last array item
    if (wordsIndex == words.length - 1) {
      text(words[wordsIndex], recWidth / 2, recY - recHeight / 2);
      wordsIndex = 0;
    } else {
      text(words[wordsIndex], recWidth / 2, recY - recHeight / 2);
      wordsIndex += 1;
    }
    //increment the y coordinate as this will move both rectangles and text
    recY += recHeight + 5;
  }

  //draw both quadrangles
  for (let i = 0; i < 10; i++) {
    //choose colour
    colourChoose(coloursIndex);
    //draw middle quadrangles
    quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
    //increment y values set next loop will draw underneath
    quadY1 += recHeight + 5;
    quadY2 += recHeight + 5;
    quadY3 += recHeight + 5;
    quadY4 += recHeight + 5;

    //text from phrases 1 array - placed so that colour from bottom quadragle is used so that it can be seen
    textAlign(LEFT);
    if (phrases1Index == phrases1.length - 1) {
      rotate(-15);
      text(phrases1[phrases1Index], phrases1X, phrases1Y);
      resetMatrix();
      phrases1Index = 0;
    } else {
      rotate(-15);
      text(phrases1[phrases1Index], phrases1X, phrases1Y);
      resetMatrix();
      phrases1Index += 1;
    }
    //increment y coordinate for phrases 1
    phrases1Y += recHeight;
    //to account for drift to right for each iteration
    phrases1X -= 20;

    //call colour function again so that right adjacent quadrangles aren't the same colour
    colourChoose(coloursIndex);

    //draw right quadrangles
    quad(nquadX1, nquadY1, nquadX2, nquadY2, nquadX3, nquadY3, nquadX4, nquadY4);
    //increment y values set next loop will draw underneath
    nquadY1 += recHeight + 5;
    nquadY2 += recHeight + 5;
    nquadY3 += recHeight + 5;
    nquadY4 += recHeight + 5;

    // code to place 2nd set of phrases does not work here, text does not appear above the quadrangles so moved to a seperate loop
    // textAlign(LEFT);
    // // translate(nquadX1, nquadX2); could not get origin moving to help account for drift with rotation
    // if (phrases2Index == phrases2.length - 1) {
    //   rotate(7);
    //   text(phrases2[phrases2Index], phrases2X, phrases2Y);
    //   resetMatrix();
    //   phrases2Index = 0;
    // } else {
    //   rotate(7);
    //   text(phrases2[phrases2Index], phrases2X, phrases2Y);
    //   resetMatrix();
    //   phrases2Index += 1;
    // }
    // phrases2Y += recHeight;
    // phrases2X += 15;
  }

  //loop for 2nd set of phrases

  for (let i = 0; i < 10; i++) {
    colourChoose(coloursIndex);
    if (phrases2Index == phrases2.length - 1) {
      rotate(7);
      text(phrases2[phrases2Index], phrases2X, phrases2Y);
      resetMatrix();
      phrases2Index = 0;
    } else {
      rotate(7);
      text(phrases2[phrases2Index], phrases2X, phrases2Y);
      resetMatrix();
      phrases2Index += 1;
    }
    phrases2Y += recHeight;
    phrases2X += 15;
  }

  function colourChoose() {
    //check if colours index is on last array item
    if (coloursIndex == colours.length - 1) {
      fill(colours[coloursIndex]);
      //reset index to 0
      coloursIndex = 0;
      //otherwise fill colour and add 1 to index to interate through array in sequence
    } else {
      fill(colours[coloursIndex]);
      coloursIndex += 1;
    }
  }
}
