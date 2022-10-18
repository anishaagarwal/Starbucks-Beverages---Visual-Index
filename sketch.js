
let table;

// preload happens only once, and is required to happen before setup
// if we load data here, it ensures we don't draw until data is ready!
function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('./data/nobel_prizes.csv', 'csv', 'header');
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
  
  console.log('Num cols: '+table.getColumnCount())
  console.log('Num rows: '+ table.getRowCount())
  
  ellipse(100, 200, 40)
  
  
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}
