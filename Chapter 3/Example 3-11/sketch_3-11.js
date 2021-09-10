function setup() {
  // put setup code here
  createCanvas(480,120);
}

function draw() {
  // put drawing code here
  background(204);
  rect(160,30,260,20);
  //reversing the order of the rect and ellipse (from 3-10)
  //means the ellipse will be above the rectangle since it was rendered after
  ellipse(140,0,190,190);

}
