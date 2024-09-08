const WALKER_COUNT = 10;
const walkers = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (let i = 0; i < WALKER_COUNT; i++) {
    walkers[i] = new Walker();
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].draw();
  }
}

class Walker {
  constructor() {
    this.x = floor(random(width));
    this.y = floor(random(height));
    this.radius = random(50);
  }

  step() {
    this.x += floor(random(10));
    this.y += floor(random(10));
    this.x = this.x > width ? (this.x = 0) : this.x;
    this.y = this.y > height ? (this.y = 0) : this.y;
    this.radius += random(-1, 1);
    this.color = color(
      floor(random(256)),
      floor(random(256)),
      floor(random(256)),
      floor(random(256))
    );
  }

  draw() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.radius);
  }
}
