function setup() {
  createCanvas(400, 400);
  colorMode (HSB);
  noStroke();
 for (let j=0 ; j<height; j=j+25)
 {
   for (let i=0; i<width; i=i+25)
   {
     let r = map(i,0,width,0,20);
     let q =map(j, 0, height,0,360);
     fill(q,100,100);
     ellipse(i,j,r,r);
   }
 }
}
function draw(){
}

  