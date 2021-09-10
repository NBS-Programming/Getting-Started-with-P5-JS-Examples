function setup() {
  // put setup code here
  createCanvas(480,120);
}

function draw() {
  // put drawing code here
  background(204);
  //rect - quad with four right angles (only needs  four paramaeters: x Pos, y Pos, width, height)
  //x Pos and y Pos always represent the center
  //circle is just an ellipse with equal height and width
  //NOTE: the -100 value for the y position (below) brings that shape outside the canvas but doesn't create an error
  ellipse(278,-100,400,400);
  ellipse(120,100,110,110);
  ellipse(412, 60, 18, 18);


}
