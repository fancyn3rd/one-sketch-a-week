const dots = [];
let time,
  time2 = 0;
const timer = 1000;
const BORDER_HEIGHT = 50;
const BORDER_WIDTH = 250;

function setup() {
  frameRate(30);
  createCanvas(window.innerWidth, window.innerHeight);

  for (let i = 0; i < 300; i++) {
    dots.push(
      new spawnDot(
        randomGaussian(width / 2 + random(-1, 1) * 200),
        randomGaussian(height / 2 + random(-1, 1) * 200)
      )
    );
  }
}

function draw() {
  background(0);
  dots.forEach((dot) => {
    dot.draw();
    dot.update();
  });
}

class spawnDot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.shape = 0;
    this.fill = color(100, 100, 100, 100);
  }

  update() {
    this.x += random(-1, 1) * 15;
    this.y += random(-1, 1) * 15;
    if (
      this.y < 0 + BORDER_HEIGHT ||
      this.y > height - BORDER_HEIGHT ||
      this.x < 0 + BORDER_WIDTH ||
      this.x > width - BORDER_WIDTH
    ) {
      this.x = width / 2;
      this.y = height / 2;
    }
  }

  draw() {
    fill(this.fill);
    stroke(random(255));
    strokeWeight(2);
    if (this.shape === 0) {
      circle(this.x, this.y, this.size, this.size);
    }
    if (this.shape === 1) {
      rect(this.x, this.y, this.size, this.size);
    }
  }
}
