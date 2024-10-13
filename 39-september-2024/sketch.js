let connections = [{ points: [], color: null }];
let connectionCounter = 0;
const OFFSET = 10;

const colors = [
  "rgba(77, 238, 234, 1)",
  "rgba(116, 238, 21, 1)",
  "rgba(255,231,0, 1)",
  "rgba(240,0,255, 1)",
  "rgba(0,30,255, 1)",
  "rgba(255, 47, 142, 1)",
  "rgba(255, 158, 76, 1)",
  "rgba(255, 214, 0, 1)",
  "rgba(102, 223, 72, 1)",
  "rgba(106, 119, 221, 1)",
  "rgba(152, 3, 206, 1)",
];

function setup() {
  frameRate(10);
  createCanvas(window.innerWidth, window.innerHeight);
  connections[0].color = color(colors[floor(random(colors.length))]);
}

function draw() {
  background(0);
  connections.forEach((connection) => {
    const points = connection.points;
    points.forEach((point, index) => {
      if (points[index] && points[index + 1]) {
        stroke(color(connection.color));
        strokeWeight(randomGaussian(5));
        line(point.x, point.y, points[index + 1].x, points[index + 1].y);
        line(
          point.x + OFFSET,
          point.y + OFFSET,
          points[index + 1].x + OFFSET,
          points[index + 1].y + OFFSET
        );
      }
    });
  });
}

function mouseReleased() {
  connections[connectionCounter].points.push({ x: mouseX, y: mouseY });
}

function keyReleased() {
  if (key === "n") {
    connectionCounter += 1;
    const newColor = color(colors[floor(random(colors.length))]);
    connections.push({ points: [], color: newColor });
  }
}
