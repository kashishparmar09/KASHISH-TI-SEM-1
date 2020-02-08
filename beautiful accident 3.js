function setup() {
  createCanvas(400, 400);
   rectMode(CENTER);
   
   fill(508,100,56);
   drawSq(width/2,height/2,width);
 }
 
 function drawSq(posX,posY,side){
 
   if(side>=3) {
   rect(posX,posY,side,side);
     fill(567,24,30);
 drawSq(posX-side/3,posY-side/3,side/2);
     fill(567,24,30)
 drawSq(posX+side/3,posY-side/3,side/2);
     fill(567,24,30)
 drawSq(posX+side/3,posY+side/3,side/2);
     fill(567,24,30)
   drawSq(posX-side/3,posY+side/3,side/2);
     fill(567,24,30)
    drawSq(posX,posY-side/2,side/3);
     fill(567,24,30)
     drawSq(posX-side/2,posY,side/3);
     fill(567,24,30)
     drawSq(posX+side/2,posY,side/3);
     fill(567,24,30)
     drawSq(posX,posY+side/2,side/3); 
     fill(567,24,30)
   }
 }
 
  
    