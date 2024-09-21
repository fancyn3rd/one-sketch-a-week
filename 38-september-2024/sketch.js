const INTERVAL = 3000;

let word = "";
let allWords = [];
let letters = [];
let allWordsIndex = 0;
let timer = 0;

function preload() {
  jsonData = loadJSON("./assets/data.json");
}

function setup() {
  allWords = jsonData.text.split(" ");
  word = allWords[0];
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(32);
  createLetterObjects();
}

function createLetterObjects() {
  letters = [];
  for (i = 0; i < word.length; i++) {
    letters.push(new Letter(word[i]));
  }
}

function draw() {
  background(255, 5);

  letters.forEach((item, index) => {
    if (index === 0) {
      letters[index].set("x", 0);
    } else {
      const previousWidth = letters[index - 1].width;
      letters[index].set("x", letters[index - 1].x + previousWidth);
    }
    letters[index].draw(mouseX, mouseY);
  });

  if (millis() - timer > INTERVAL) {
    allWordsIndex = (allWordsIndex + 1) % allWords.length;
    word = allWords[allWordsIndex];
    createLetterObjects();
    timer = millis();
  }
}

class Letter {
  constructor(character) {
    this.character = character;
    this.width = textWidth(character);
    this.x = 0;
    this.y = 0;
  }

  set(param, value) {
    this[param] = value;
  }

  draw(x, y) {
    text(this.character, this.x + x, this.y + y);
  }
}
