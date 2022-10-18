// add more key/value pairs to your object from the questions
const answers = {
  'fromMass': "no",
}

// happens only once!
function setup() {
  createCanvas(500, 500);
  background(255, 255, 255);
}

// happens forever! unless call noLoop() function inside
function draw() {
  
  stroke(10)
  strokeWeight(3)
  
  if (answers.fromMass == "no") {
    fill(30,220,200)  
  } else {
    fill(200)
  }
  
  ellipse(100, 200, 40)
  
  
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}
