function setup() {
  createCanvas(640, 480);
  background(0)
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  triangle(mouseX, mouseY, 80, 80,20,60);
}