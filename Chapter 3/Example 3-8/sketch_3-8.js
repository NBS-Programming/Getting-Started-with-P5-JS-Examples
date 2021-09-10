function setup() {
  // put setup code here
  createCanvas(480,120);
}

function draw() {
  // put drawing code here
  background(204);
  //arc - creates a piece of an ellipse (needs six paramaeters: x Pos, y Pos, width, height, start angle, stop angle)
  //see the radians guide (p.22) to better understand the relationship between start and stop angle
  arc(90,60,80,80,0,radians(90));
  arc(190,60,80,80,0,radians(270));
  arc(290,60,80,80,radians(180),radians(450));
  arc(390,60,80,80,radians(45),radians(225));
}
