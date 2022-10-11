// happens only once!
function setup() {
  createCanvas(500, 400);
  background(205);
  stroke(30)
}

// happens forever! unless you noLoop() it.
function draw() {
  ellipse(50,50,10)
}
