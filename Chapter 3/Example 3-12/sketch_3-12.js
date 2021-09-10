function setup() {
  // put setup code here
  createCanvas(480,120);
  //the noLoop function stops the draw loop from running continuously
  noLoop();
}

function draw() {
  // put drawing code here
  background(204);
  ellipse(75,60,90,90); //default stroke width of 1 pixel
  strokeWeight(8); //sets the stroke weight to 8 pixels
  ellipse(175,60,90,90);
  ellipse(279,60,90,90);
  strokeWeight(20); //sets the stroke weight to 20 pixels
  ellipse(389,60,90,90);
}
