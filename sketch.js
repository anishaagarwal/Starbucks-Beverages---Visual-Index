const primary = 'rgb(150,0,50)'
const y = 800;

// happens only once!
function setup() {
  createCanvas(500, y);
  background(205);
  stroke(30)
}

// happens forever! unless you noLoop() it.
function draw() {
  fill(primary)
  ellipse(50,50,30)
}
