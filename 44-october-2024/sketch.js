const instances = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  instances.push(new Thing(100));
  instances.push(new Thing(110));
  instances.push(new Thing(-100));
  instances.push(new Thing(-110));
}

function draw() {
  background(0);
  instances.forEach((instance) => {
    instance.update();
    instance.draw();
  });
}

class Thing {
  constructor(initOff) {
    this.offset = initOff;
    this.a = [width / 2 - initOff, height / 2];
    this.b = [width / 2 + initOff, height / 2];
    this.c = [width / 2 + initOff, height / 2 + initOff];
    this.d = [width / 2 - initOff, height / 2 + initOff];
  }

  update() {
    this.noises = [
      noise(millis() / 1000),
      noise(millis() / 1100),
      noise(millis() / 1200),
      noise(millis() / 1300),
      noise(millis() / 1400),
      noise(millis() / 1500),
      noise(millis() / 1600),
      noise(millis() / 1700),
    ];

    this.a[0] = map(this.noises[0], 0, 1, 0, width) - this.offset;
    this.a[1] = map(this.noises[1], 0, 1, 0, height);

    this.b[0] = map(this.noises[2], 0, 1, 0, width) + this.offset;
    this.b[1] = map(this.noises[3], 0, 1, 0, height);

    this.c[0] = map(this.noises[4], 0, 1, 0, width) + this.offset;
    this.c[1] = map(this.noises[5], 0, 1, 0, height) + this.offset;

    this.d[0] = map(this.noises[6], 0, 1, 0, width) - this.offset;
    this.d[1] = map(this.noises[7], 0, 1, 0, height) + this.offset;
  }

  draw() {
    stroke(0, 100, 200);
    strokeWeight(5);
    line(this.a[0], this.a[1], this.b[0], this.b[1]);
    line(this.b[0], this.b[1], this.c[0], this.c[1]);
    line(this.c[0], this.c[1], this.d[0], this.d[1]);
    line(this.d[0], this.d[1], this.a[0], this.a[1]);
  }
}
