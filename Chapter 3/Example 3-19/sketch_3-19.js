function setup() {
  // put setup code here
  createCanvas(480,120);
  //the noLoop function stops the draw loop from running continuously
  noLoop();
}

function draw() {
  // put drawing code here
  background(204);
  beginShape();
  vertex(180,82); //vertex represents one point on the shape, this is ONLY used with beginShape and endShape
  vertex(207,36);
  vertex(214,63);
  vertex(407,11);
  vertex(412,30);
  vertex(219,82);
  vertex(226,109);
  endShape(CLOSE); //passing the endShape function the CLOSE argument makes sure the last line completes
}
