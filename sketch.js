var canvas;
var changeCanvasColor;
let mic;

var h1;
var btn;
var t;

var s1;
var s2;
var s3;
var s4;

var m;
var nm;

var sliderDimension;

function preload() {
   img = loadImage("/img/virus.png");
}

function setup() {
  h1 = createElement("h1", "A postcard to 2020");
  h1.position(700, 3);
  h1.style("font-size: 45px; font-family: Roboto Mono");

  s1 = createElement("span", "1. Change background color");
  s1.position(50, 100 + 210);
  s1.style("font-family: Roboto Mono; font-size: 10");

  btn = createElement("button", "color");
  btn.style("position: absolute; font-family: Roboto Mono");
  btn.position(80, 130 + 210);
  btn.mouseClicked(changeCanvasColor);

  s2 = createElement("span", "2. Speak to create a pattern");
  s2.position(50, 180 + 210);
  s2.style("font-family: Roboto Mono; font-size: 10");

  s3 = createElement("span", "3. Change the text dimension");
  s3.position(50, 260 + 210);
  s3.style("font-family: Roboto Mono; font-size: 10");

  sliderDimension = createSlider(10, 107, 10);
  sliderDimension.position(80, 290 + 210);

  sliderDimension.input(changeDimension);

  t = createP("<b>I HATE <br>2020</br></b>");
  t.position(650, 100);
  t.style("color: white; font-family: Roboto Mono");

  canvas = createCanvas(800, 500);
  canvas.position(380, 100);
  canvasColor = background(135, 206, 250);

  img.filter(INVERT);

  m = createP("Type");
  m.position(850, 100);
  m.style("position: absolute; font-family: Roboto Mono; font-size: 15; color: white");

  s4 = createElement("span", "4. Leave a message to 2020");
  s4.position(50, 340 + 210);
  s4.style("font-family: Roboto Mono; font-size: 10");

  nm = createInput("Type");
  nm.position(80, 370 + 210);
  nm.style("position: absolute; font-family: Roboto Mono; font-size: 11; color: black;")
  nm.input(updateTextContent);
}

function changeDimension() {
  t.style("font-size", sliderDimension.value() + "pt");
}

function updateTextContent() {
  m.html(nm.value());
}


function draw() {
  if (mic) {
    const micLevel = mic.getLevel();
    let d = map(micLevel, 0, 1, 10, 200);
    image(img, 0, 0, img.width/100*d, img.height/100*d);
  }
}

function changeCanvasColor() {
  canvasColor = background(random(255), random(255), random(255));
}


function mousePressed() {
  userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
}
