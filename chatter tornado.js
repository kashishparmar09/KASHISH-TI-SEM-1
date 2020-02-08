let r;

function setup() {
  createCanvas(400, 400);
  let r = 150;

}

function draw() {
  r = mouseX;
  background(220);
  noStroke();
  fill(0);
  for (let t = 0; t < 360; t=t+2) {
    d = radians(t);
    let x = width / 2 + r * sin(d) + random(0,15);
    let y = height / 2 + r* cos(d) + random(0,15);
    let z = width /2 + r* sin(d) + random (0,1);
    rect(x, y, z,random(0,1),random(0,1),random(0,1));
  }
}