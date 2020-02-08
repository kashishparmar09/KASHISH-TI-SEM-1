function setup() {
  createCanvas(400, 400);
  p=0;
}
function draw(){
background(110,150,20,10);
  let w=55;
  let h=80;
  triangle(p,height/2-h/2,w,h);
  triangle(p,height/2-w/8,w,h)
  
  p=p+10
   if(p>width)
p=p+(-1);
 
  triangle(width/2-w/2,p,w,h);
  triangle(width/4-h/4,p,w,h)
  p=p+1;
  if(p>height)
p=0;
}