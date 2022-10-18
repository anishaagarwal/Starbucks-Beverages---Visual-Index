
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
  createCanvas(500, 500);
  background(255, 255, 255);
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
    let y = map(table.getNum(row,13), 50,90,100,height)
    if (table.getString(6) == "physics") {
      
    }
       fill(130)
      ellipse(x, y, 5) 
  }
  
  
  // this function prevents p5 from looping over and over, since we don't need animation
  noLoop()
}
