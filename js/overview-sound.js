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
  button = createButton('start');
  button.mousePressed(toggleOsc);
  osc = new p5.SinOsc(freq);
  osc.amp(amp);
  fft = new p5.FFT();
}

function draw() {
  clear();

  amp = saveData.data[0].amp/100;
  osc.amp(amp);

  // analyze the waveform
  waveform = fft.waveform();

  // draw the shape of the waveform
  stroke(192,39,39);
  strokeWeight(5);
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 1050, 400, width);
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
