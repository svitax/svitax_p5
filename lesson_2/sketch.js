function setup() {
  createCanvas(600,400);
  //background
  background(250, 250, 100);
}

function draw() {

  //ellipse
  noStroke();
  fill(50,100,100);
  ellipse(mouseX, mouseY, 25, 25);

  //rectangle
  fill(200,250,200);
  rect(400, 100, 50, 50);
}
