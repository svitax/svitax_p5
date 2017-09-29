const circle = {
  x: 0,
  y: 200,
  diameter: 50,
};


const r = 100;
const g = 155;
const b = 221;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x += 1;
}
