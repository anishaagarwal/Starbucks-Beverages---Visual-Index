const numArray = [2, 1, 5, 4, 8, 9];

// happens only once!
function setup() {
  createCanvas(500, 400);
  background(255, 255, 255);
  stroke(30, 30, 220)
  strokeWeight(0)
  
}

// happens forever! unless call noLoop() function inside
function draw() {
  let x = 159;
  let y = 80;
  let m = map(max(numArray), 0, 10, 0, 10);

  // Draw the Maximum value in the array.
  textSize(32);
  text('Max is: '+max(numArray), x, y)  
  
  fill(30,20,100)
  ellipse(x, 200, m*10)
}
