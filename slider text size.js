let btClick;
let slSize;
//let slColor;

function setup() {
  createCanvas(400, 400);
  btClick = createButton("Click Me !");
  slSize = createSlider(5,500);
  //slColor = createSlider(67,140,456);
  //colorMode(HSB)
  
  }

function draw() {
  background(0);
  fill(34,89,170);
  btClick.mouseClicked(clickFn);
  let tx = slSize.value();
  textSize(tx);
  //let Cx = slSize.value();
 
  
  

  //background(tx,10);
  text("Got Clicked yeah", random(0, width), (height));
}

function clickFn()
{
//text("Got Clicked yeah", random(0, width), (height/2));
    
}
