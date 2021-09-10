function setup() {
  // put setup code here
  createCanvas(480,120);
  //the noLoop function stops the draw loop from running continuously
  noLoop();
}

function draw() {
  // put drawing code here
  background(204);
  strokeWeight(12);
  strokeJoin(ROUND);//changes the way corners look can be set to MITER, BEVEL, or ROUND
  rect(40,25,70,70);
  strokeJoin(BEVEL);
  rect(140,25,70,70);
  strokeCap(SQUARE);//changes the way lines begin and end can be set to ROUND, SQUARE, or PROJECT
  line(270,25,340,95);
  strokeCap(ROUND);
  line(350,25,420,95);
}
