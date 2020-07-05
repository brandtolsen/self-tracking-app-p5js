//red circle
let rcy = 180;
let rcx = 300;
let roy = 300;
let rox = 372;

//green circle
let gcy = 600;
let gcx = 600;
let goy = 600;
let gox = 639;

//blue circle
let bcy = 450;
let bcx = 450;
let boy = 450;
let box = 489;

var rrad = [rcx,rcy,roy,rox];
var grad = [gcx,gcy,goy,gox];
var brad = [bcx,bcy,boy,box];

let hdia = 50;

var saveData = [];

function preload() {
    saveData = JSON.parse(localStorage.saveData || null) || {data : []};
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() { 
  let rrad = dist(rcx,rcy,roy,rox);
  let grad = dist(gcx,gcy,goy,gox);
  let brad = dist(bcx,bcy,boy,box);
  background(255);
  fill(rrad,grad,brad);
  ellipse(150, 150, 900, 900);
  strokeWeight(2)
  beginShape(LINES);
  vertex(300,300);
  vertex(600,300);
  endShape();
  beginShape(LINES);
  vertex(300,450);
  vertex(600,450);
  endShape();
  beginShape(LINES);
  vertex(300,600);
  vertex(700,600);
  endShape();
  
  // red circle
  fill(0,0,0,0)
  circle(rcy,rcx);
  strokeWeight(0)
  fill(0);
  beginShape(LINES);
  vertex(rcx,rcy);
  vertex(rox,roy);
  endShape();
  circle(rcx,rcy,0);
  circle(rox,roy,hdia);

  if(dist(rox, roy, mouseX, mouseY)< hdia/2 && mouseIsPressed)  {
  fill(0);
  rox = mouseX;
  roy = mouseY;
  ellipse(rox, roy, hdia,hdia);}
  
  //green circle
  fill(0,0,0,0)
  circle(gcy,gcx);
  strokeWeight(0)
  fill(0);
  beginShape(LINES);
  vertex(gcx,gcy);
  vertex(gox,goy);
  endShape();
  circle(gcx,gcy,0);
  circle(gox,goy,hdia);
  
  if(dist(gox, goy, mouseX, mouseY)< hdia/2 && mouseIsPressed)  {
  fill(0);
  gox = mouseX;
  goy = mouseY;
  }
  ellipse(gox, goy, hdia,hdia); 
 
  // blue circle
  fill(0,0,0,0)
  circle(bcy,bcx);
  strokeWeight(0)
  fill(0);
  beginShape(LINES);
  vertex(bcx,bcy);
  vertex(box,boy);
  endShape();
  circle(bcx,bcy,0);
  circle(box,boy,hdia);
  
  if(dist(box, boy, mouseX, mouseY)< hdia/2 && mouseIsPressed)  {
  fill(0);
  box = mouseX;
  boy = mouseY;
  ellipse(box, boy, hdia,hdia);}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === ENTER) {
    // Save stuff
    saveOurData();
    // Save color
    userColor();
    // Output the data to the console
    console.log(saveData);
    console.log(userColor);
 }
}

function userColor() {
  let userColor = (dist(rcx,rcy,roy,rox), dist(gcx,gcy,goy,gox), dist(bcx,bcy,boy,box));
}

// Store your data.
function saveOurData() {
    // Create a temporary object
    var tempObject = {};
    // Add our local values to the object
    tempObject.r = rrad;
    tempObject.g = grad;
    tempObject.b = brad;
    // Add the object to our data array
    saveData.data.push(tempObject);
    // Save it to the localStorage
    localStorage.saveData = JSON.stringify(saveData);
}
