function setup() {
  // put setup code here
  createCanvas(480,120);
  //the noLoop function stops the draw loop from running continuously
  noLoop();
}

function draw() {
  // put drawing code here
  background(244,226,225);
  fill(255,0,0,160); // RED - tansparency is the last argument (160 on this line).0 = full transparent, 255 = full opaque
  ellipse(132,82,200,200);
  fill(0,255,0,160);// GREEN- tansparency is the last argument (160 on this line).0 = full transparent, 255 = full opaque
  ellipse(228,-16,200,200);
  fill(0,0,255,160);// BLUE - tansparency is the last argument (160 on this line).0 = full transparent, 255 = full opaque
  ellipse(268,118,200,200);
}
