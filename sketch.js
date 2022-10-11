
let x = 50;
let speed = 5
// happens only once!
function setup() {
  createCanvas(500, 400);
  background(205);
  stroke(30)
}

// happens forever! unless call noLoop() function inside
function draw() {
  fill(255,0,0)
  ellipse(x,50,30)
   
}
