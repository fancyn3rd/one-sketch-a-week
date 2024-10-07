const boxes = [];
const BOX_SIZE = 20;
const GAP = BOX_SIZE * 2;

const timer = 1000;
let time = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let x = 0; x <= 30; x++) {
    for (let y = 0; y <= 30; y++) {
      boxes.push(new Box(x + GAP * x, y + GAP * y, BOX_SIZE));
    }
  }
}

function draw() {
  background(0);
  boxes.forEach((box) => {
    box.update();
    box.draw();
  });

  if (millis() - time >= timer) {
    boxes[floor(random(0, boxes.length - 1))].updateStyle();
  }
}

class Box {
  constructor(x, y, size) {
    this.x = x + 190;
    this.y = y;
    this.w = size;
    this.h = size;
    this.gap = size * 2;
    this.fill = 0;
    this.stroke = 255;
  }

  update() {
    this.x += random(-1, 1) * 10;
    this.y += random(0, 15);

    this.x = this.x >= width ? 0 : this.x;
    this.y = this.y >= height ? -50 : this.y;
  }

  updateStyle() {
    this.stroke = color(
      randomGaussian(255, 255),
      randomGaussian(255, 255),
      randomGaussian(255),
      255
    );
  }

  draw() {
    fill(this.fill);
    stroke(this.stroke);
    strokeWeight(2);
    rect(this.x + this.gap, this.y + this.gap, this.w, this.h);
  }
}
