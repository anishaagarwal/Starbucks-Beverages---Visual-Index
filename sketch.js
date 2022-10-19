
let table;

// preload happens only once, and is required to happen before setup
// if we load data here, it ensures we don't draw until data is ready!
function preload() {
  // my table is comma separated value "csv"
  // and has a header specifying the columns labels
  table = loadTable('./nobel_prizes_50yrs.csv', 'csv', 'header');
}

// happens only once, after preload() triggers
function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
  
  // console out the table and look for the columns we are interested in
  // using the developer tools of the browser (Command+Option+i on a Mac or "Inspect" on right click)
  console.log(table)
}

// all drawing happens here, but only once because of the noLoop() at the end
function draw() {
  stroke(10)
  strokeWeight(1)
  console.log(table)
  
  console.log('Num cols: '+table.getColumnCount())
  console.log('Num rows: '+ table.getRowCount())

  // loop through the table for every row in the CSV
  for (let row = 0; row < table.getRowCount(); row++) {
    // for this row, store the value for the cell in column 6
    let value = table.getNum(row,5)
    
    // map this value onto a range of pixels using the min/max of the dataset
    let x = map(value,1970,2019,0,width)
    
    let y = height/2;
       
    ellipse(x, y, 5) 
  }
  
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}
