function setup() {
  // put setup code here
  createCanvas(480,120);
  //the noLoop function stops the draw loop from running continuously
  noLoop();
}

function draw() {
  // put drawing code here
  background(0);
  fill(204); //fill with a single argument is grayscale, 0-255 possible values.e
  ellipse(132,82,200,200);
  fill(153); //0 = black, 255= white so, 153 is medium gray
  ellipse(228,-16,200,200);
  fill(102); //0 = black, 255= white so, 102 is dark gray
  ellipse(268,118,200,200);
}
