<<<<<<< HEAD
var circle = {
  x: 0,
  y: 200,
  diameter: 50
};


var r = 218;
var g = 160;
var b = 221;
=======
var r = 0;
var b = 225;
>>>>>>> 14c4104196a7ab69ee97c553a5c6df56c742cfe8

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
<<<<<<< HEAD
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x = circle.x + 1;
}
=======
  //col = mouseX;
  //col = map(mouseX, 0, 600, 0, 255);
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  // background(col);
  background(r, 0, b);

  // ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}
>>>>>>> 14c4104196a7ab69ee97c553a5c6df56c742cfe8
