var r;
var g;
var b;
var a;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
   noStroke();
   
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
  
  noStroke();
  fill(r, g, b, a);
  rect(200,200,100,100);

  
  
}
//578,100,56
function drawSq(posX, posY, side) {
  

  if (side >= 3) {
    rect(posX, posY, side, side);
    fill(567, 24, 30);
    drawSq(posX - side / 3, posY - side / 3, side / 4);
    fill(567, 24, 30)
    drawSq(posX + side / 3, posY - side / 3, side / 4);
    fill(567, 24, 30)
    drawSq(posX + side / 3, posY + side / 3, side / 4);
    fill(567, 24, 30)
    drawSq(posX - side / 3, posY + side / 3, side / 4);
    fill(567, 24, 30)
    drawSq(posX, posY - side / 2, side / 3);
    fill(567, 24, 30)
    drawSq(posX - side / 2, posY, side / 3);
    fill(567, 24, 30)
    drawSq(posX + side / 2, posY, side / 3);
    fill(567, 24, 30)
    drawSq(posX, posY + side / 2, side / 3);
    fill(567, 24, 30)
  }

}