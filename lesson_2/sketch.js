var circleX = 0;

function setup() {
  createCanvas(600,400);
}

function draw() {
  //background
  background(250, 250, 100);
  
  //ellipse
  noStroke();
  fill(50,100,100);
  ellipse(circleX, 200, 15, 10);

  circleX = circleX + 1;

  //rectangle
  fill(200,250,200);
  rect(400, 100, 50, 50);
}

function mousePressed() {
  background(250, 250, 100);
}
