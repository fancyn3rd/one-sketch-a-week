let zoomFactor = 10;

let colors = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(200);
  //noLoop();
}

function draw() {
  colors = [
    color(random(255), random(255), random(255)),
    color(random(255), random(255), random(255)),
    color(random(255), random(255), random(255)),
    color(random(255), random(255), random(255)),
  ];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const noiseValue = noise(x / zoomFactor, y / zoomFactor);

      let terrainColor = 0;
      if (noiseValue < 0.1) {
        terrainColor = lerpColor(colors[3], colors[0], random());
      } else if (noiseValue < 0.2) {
        terrainColor = colors[0];
      } else if (noiseValue < 0.3) {
        terrainColor = lerpColor(colors[0], colors[1], random());
      } else if (noiseValue < 0.4) {
        terrainColor = colors[1];
      } else if (noiseValue < 0.5) {
        terrainColor = lerpColor(colors[1], colors[2], random());
      } else if (noiseValue < 0.6) {
        terrainColor = colors[2];
      } else if (noiseValue < 0.7) {
        terrainColor = lerpColor(colors[2], colors[3], random());
      } else {
        terrainColor = lerpColor(colors[3], colors[1], random());
      }
      set(x, y, color(terrainColor));
    }
    noiseDetail(random(-10, 10), random(0.1));
  }

  updatePixels();
  zoomFactor += random(-100, 100);
}
