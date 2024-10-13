const boxes = [];
const BOX_SIZE = 100;

const timer = 100;
const timer2 = 1000;

let time = 0;
let time2 = 0;

let color1 = 0;
let color2 = 1;

const colors = [
  "rgba(0,0,0, 1)",
  "rgba(255,255,255, 1)",
  "rgba(77, 238, 234, 0.5)",
  "rgba(116, 238, 21, 0.5)",
  "rgba(255,231,0, 0.5)",
  "rgba(240,0,255, 0.5)",
  "rgba(0,30,255, 0.5)",
  "rgba(255, 47, 142, 0.5)",
  "rgba(255, 158, 76, 0.5)",
  "rgba(255, 214, 0, 0.5)",
  "rgba(102, 223, 72, 0.5)",
  "rgba(106, 119, 221, 0.5)",
  "rgba(152, 3, 206, 0.5)",
];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  let id = 0;
  for (let x = 0; x <= width; x += BOX_SIZE) {
    for (let y = 0; y <= height; y += BOX_SIZE) {
      boxes.push(new Box(x, y, BOX_SIZE, id));
      id++;
    }
  }
}

function draw() {
  boxes.forEach((box) => {
    box.draw();
  });

  if (millis() - time >= timer) {
    console.log("do");
    boxes.forEach((box) => {
      box.fill = box.fill === colors[color1] ? colors[color2] : colors[color1];
    });
    time = millis();
  }

  if (millis() - time2 >= timer2) {
    color1 = (color1 + 1) % colors.length;
    color2 = (color2 + 1) % colors.length;
    time2 = millis();
  }
}

class Box {
  constructor(x, y, size, id) {
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.gap = size * 2;
    this.fill = id % 2 === 0 ? "rgba(255,255,255, 1)" : "rgba(0,0,0, 1)";
    this.stroke = 255;
    this.id = id;
  }

  update() {}

  updateStyle() {}

  draw() {
    fill(this.fill);
    stroke(this.stroke);
    rect(this.x, this.y, this.w, this.h);
  }
}
