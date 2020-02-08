let p1;

function setup() {
  createCanvas(400, 400);
  p1 = new Particle();
  fill(70,80,128);
}

function draw() {
  background(220);
  p1.display();
  p1.update();
}
class Particle
{
  constructor()
  {
    this.posX = random(0, width);
    this.posY = random(0, height);
    this.velX = random();
    this.velY = random();
    this.accX = 0.5;
    this.accY = 0;
  }
  update() {
    this.posX  = this.posX + this.velX;
    this.posY += this.velY;
    if(this.posX > width || this.posX <0)
    {
      this.velX = -this.velX;
    }
    
    if(this.posY<0)
    {
      this.posY = height;
    }
    if (this.posY > height) 
    {
      this.posY = 0;
    }  
    this.velX += this.accX;
    this.velY += this.accY;
  }
    
  display()
  {
    ellipse(this.posX, this.posY,50,50);
    ellipse(this.posY, this.posX,70,70);
    ellipse(this.posX, this.posY,80,80);
    
   }
}