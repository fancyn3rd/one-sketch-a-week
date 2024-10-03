let connections = [{ points: [], color: null }];
let connectionCounter = 0;
const OFFSET = 10;

function setup() {
  frameRate(10);
  createCanvas(window.innerWidth, window.innerHeight);
  connections[0].color = color(random(255), random(255), random(255));
}

function draw() {
  background(0);
  connections.forEach((connection) => {
    const points = connection.points;
    points.forEach((point, index) => {
      if (points[index] && points[index + 1]) {
        stroke(color(connection.color));
        strokeWeight(random(10));
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
    const newColor = color(random(255), random(255), random(255));
    connections.push({ points: [], color: newColor });
  }
}
