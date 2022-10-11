const x = 120;

// happens only once!
function setup() {
  createCanvas(500, 400);
  background(255, 255, 255);
  stroke(30, 30, 220)
  strokeWeight(3)
  fill(255,0,0)
  ellipse(x,250,80)
}

// happens forever! unless call noLoop() function inside
function draw() {
  
}
