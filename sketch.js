// add more key/value pairs to your object from the questions
const answers = {
  'fromMass': "yes",
}

// happens only once!
function setup() {
  createCanvas(500, 500);
  background(255, 255, 255);
  stroke(30, 30, 220)
}

// happens forever! unless call noLoop() function inside
function draw() {
  let x = 159;
  let y = 80;
  
  if (answers.fromMass == "no") {
    fill(30,20,100)  
  } else {
    fill(200)
  }
  
  ellipse(x, 200, 10)
  
  
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}
