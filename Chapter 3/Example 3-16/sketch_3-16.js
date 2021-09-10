function setup() {
  // put setup code here
  createCanvas(480,120);
  //the noLoop function stops the draw loop from running continuously
  noLoop();
}

function draw() {
  // put drawing code here
  background(0,26,51);
  fill(255,0,0); //RED - arguments are (RED, GREEN, BLUE), max value is 255
  ellipse(132,82,200,200);
  fill(0,255,0); //GREEN - arguments are (RED, GREEN, BLUE), max value is 255
  ellipse(228,-16,200,200);
  fill(0,0,255); //BLUE - arguments are (RED, GREEN, BLUE), max value is 255
  ellipse(268,118,200,200);
}
