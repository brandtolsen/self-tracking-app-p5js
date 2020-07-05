/**
 * Example: change the frequency of an oscillator and visualize the waveform
 */

var freqSlider, freqLabel, ampLabel, ampSlider, button;
var osc;
var freq = 220;
var amp = 0.5;
var fft;
var oscOn = false;
var saveData = [];

function preload() {
    saveData = JSON.parse(localStorage.saveData || null) || {data : []};
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  ampSlider = createSlider(0.0, 100.0, amp*100);
  button = createButton('start');
  button.mousePressed(toggleOsc);
  osc = new p5.SinOsc(freq);
  osc.amp(amp);
  fft = new p5.FFT();
}

function draw() {
  background(255);

  amp = ampSlider.value()/100;
  osc.amp(amp);

  // analyze the waveform
  waveform = fft.waveform();

  // draw the shape of the waveform
  stroke(192,39,39);
  strokeWeight(5);
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();
}

// Turn the oscillator on / off
function toggleOsc() {
  if (oscOn) {
    osc.stop();
    button.html('start');
  } else {
    osc.start();
    button.html('stop');
  }
  oscOn = !oscOn;
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
    tempObject.amp = ampSlider.value()
    // Add the object to our data array
    saveData.data.push(tempObject);
    // Save it to the localStorage
    localStorage.saveData = JSON.stringify(saveData);
}