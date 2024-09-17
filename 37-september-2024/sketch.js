const DELAY_TIME = 5000;
const CIRCLE_MIN_SIZE = 10;
const CIRCLE_MAX_SIZE = 30;

let img = null;
let delay = DELAY_TIME;
let cx = window.innerWidth / 2,
  cy = window.innerHeight / 2,
  cr = CIRCLE_MIN_SIZE;

function preload() {
  img = loadImage("https://picsum.photos/200");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  if (millis() > delay) {
    let rnd = floor(random()) * 100;
    img = loadImage(`https://picsum.photos/${rnd}`, imageLoaded());
    delay = millis() + DELAY_TIME;
  }
  fill(0, 0, 0, 0);

  cx += floor(random(-1, 1) * 30);
  cy += floor(random(-1, 1) * 30);
  cr += floor(random() * 10);

  cr = cr >= CIRCLE_MAX_SIZE ? CIRCLE_MIN_SIZE : cr;
  cx = cx > width ? window.innerWidth / 2 : cx;
  cy = cy > height ? window.innerHeight / 2 : cy;

  cx = cx < 0 ? window.innerWidth / 2 : cx;
  cy = cy < 0 ? window.innerHeight / 2 : cy;

  circle(cx, cy, cr);
}

function imageLoaded() {
  tint(255, 255, 255, 125);
  image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
}
