
let table;

// preload happens only once, and is required to happen before setup
// if we load data here, it ensures we don't draw until data is ready!
function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('./data/nobel_prizes_50yrs.csv', 'csv', 'header');
}

// happens only once!
function setup() {
  createCanvas(1000, 1000);
  background(255, 255, 255);
  console.log(table)
}

// happens forever! unless call noLoop() function inside
function draw() {
  
  stroke(10)
  strokeWeight(1)
  
  console.log('Num cols: '+table.getColumnCount())
  console.log('Num rows: '+ table.getRowCount())
  
  for (let row = 0; row < table.getRowCount(); row++) {
    console.log(table.getNum(row,5))
    
    let x = map(table.getNum(row,5),1970,2019,0,width)
    let y = map(table.getNum(row,13), 50,90,height,100)
    if (table.getString(row,6) == "physics") {
      fill(130)
    } else {
      fill(230)
    }
       
      ellipse(x, y, 5) 
  }
  
  
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}
