function setup() {
 
  createCanvas(400,400);
}

function draw() {
  
  //repeating 50 times per draw loop to have a faster effect
  for (let i = 0; i < 1; i++) {    
    let x = random(0, width);
    let y = random(0, height);
    let r = random(15, 50);

    

    noFill();
    stroke(35,56,78);
    
    
    ellipse(x, y, r, r);
    rect(x,y,r,r);

    // textSize(16);
    // textStyle(BOLD);
    // text("elePhant",x-8,y);
  }
}