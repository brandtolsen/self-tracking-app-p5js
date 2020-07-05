var bx;
var by;
var boxSize = 50;
var xOffset = 0.0; 
var yOffset = 0.0;
var saveData = [];

function preload() {
    saveData = JSON.parse(localStorage.saveData || null) || {data : []};
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bx = width/2.0;
  by = height/2.0;
  angleMode(DEGREES);
}

function draw() {
  clear();
  xOffset = mouseX-bx; 
  yOffset = mouseY-by;
  noStroke()
  fill(192,39,39);
  beginShape();
  let spacing = map(saveData.data[0].mouseX, 0, width, 5, 200);
  for (let a = 0; a < 360; a += spacing) {
    let bx = 50 *sin(a) + 500;
    let by = 50 *cos(a) + 380;
    vertex(bx, by);  
  
}
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}