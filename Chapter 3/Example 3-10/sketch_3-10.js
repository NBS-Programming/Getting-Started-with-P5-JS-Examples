function setup() {
  // put setup code here
  createCanvas(480,120);
}

function draw() {
  // put drawing code here
  background(204);
  ellipse(140,0,190,190);
  //processing renders shapes in the order they are called in the program,
  //so the rectangle will be above the ellipse since it was rendered after
  rect(160,30,260,20);
}
