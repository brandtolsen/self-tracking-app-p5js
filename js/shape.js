var bx;
var by;
var boxSize = 150;
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
  background(255);
  xOffset = mouseX-bx; 
  yOffset = mouseY-by;
  noStroke()
  fill(192,39,39);
  beginShape();
  let spacing = map(mouseX, 0, width, 5, 200);
  for (let a = 0; a < 360; a += spacing) {
    let bx = 400 *sin(a) + 200;
    let by = 400 *cos(a) + 200;
    vertex(bx, by);  
  
}
  endShape(CLOSE);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === ENTER) {
    // Save stuff
    saveOurData();
    // Output the data to the console
    console.log(saveData);
 }
}

// Store your data.
function saveOurData() {
    // Create a temporary object
    var tempObject = {};
    // Add our local values to the object
    tempObject.mouseX = mouseX;
    // Add the object to our data array
    saveData.data.push(tempObject);
    // Save it to the localStorage
    localStorage.saveData = JSON.stringify(saveData);
}