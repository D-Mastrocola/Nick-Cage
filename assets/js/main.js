let startTime = Date.now();
console.log(startTime);

let lastCageRendered = 0;
let timeout = 0;
let count = 0;

let logo, nickCage;
function preload() {
  logo = loadImage("./assets/images/dieboldLogo.png");
  nickCage = loadImage("./assets/images/nickCage.png");
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  image(logo, width / 2 - 300, height / 2 - 914 / 4, 1200 / 2, 914 / 2);
}
function clearCanvas() {
  clear();
  image(logo, width / 2 - 300, height / 2 - 914 / 4, 1200 / 2, 914 / 2);
  timeout = Date.now();
  count = 0;
}
function draw() {
  if (Date.now() - startTime > 20_000) {
    if (lastCageRendered + timeout - Date.now() <= 0) {
      let x = Math.round(Math.random() * width);
      let y = Math.round(Math.random() * height);
      image(nickCage, x, y, 85, 104);
      lastCageRendered = Date.now();
      timeout = Math.random() * 750;
      count++;
    }
  }
  if (count > 100) clearCanvas();
}
