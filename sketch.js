// initialize the table as an empty variable
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
  
  // we can access how many rows and columns using getColumnCount() or getRowCount() method on table
  console.log('Num cols: '+table.getColumnCount())
  console.log('Num rows: '+ table.getRowCount())

  // loop through the table for every row in the CSV using getRowCount()
  for (let row = 0; row < table.getRowCount(); row++) {
    // getNum() method takes two arguments: first is the row index, and second is the column index
    // if we pass in 5, then we are grabbing data for this row from column number 6
    // you can change the number to access different columns in the CSV
    let value = table.getNum(row,5)
    
    // map this value onto a range of pixels using the min/max of the dataset
    let x = map(value,1970,2019,0,width)
    
    // this variable is hardcoded, but you could also use another map() to add more data!
    let y = height/2;
       
    // draw a circle using the x and y variables above
    ellipse(x, y, 5) 
  }
  
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}
