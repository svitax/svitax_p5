var circleX = 50;

function setup() {
  createCanvas(600,400);
  //background
  background(250, 250, 100);
}

function draw() {
  //ellipse
  noStroke();
  fill(50,100,100);
  ellipse(circleX, mouseY, 15, 10);

  //rectangle
  fill(200,250,200);
  rect(400, 100, 50, 50);
}

function mousePressed() {
  background(250, 250, 100);
}
