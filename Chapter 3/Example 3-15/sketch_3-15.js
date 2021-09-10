//NOTE: Turning off the fill reveals the shape rendered below

function setup() {
  // put setup code here
  createCanvas(480,120);
  //the noLoop function stops the draw loop from running continuously
  noLoop();
}

function draw() {
  // put drawing code here
  background(204);
  fill(153); //153 is medium gray
  ellipse(132,82,200,200);
  noFill(); //turns off the fill
  ellipse(228,-16,200,200);
  noStroke(102); //turns off the stroke
  ellipse(268,118,200,200);
}
