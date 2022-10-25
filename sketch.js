let table;
let numRows;
let numCols;
let answers = {
  Calories: "100",
  Caffeine: "75",
  Carbs: "10",
  Sugar: "50",
};

function preload() {
  table = loadTable("./Starbucks_coffee.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  // for (let i=0; i<numRows; i++){
  // console.log(table.rows[i].obj);
  // }
  for (let r=0; r<6; r++){
    for (let c=0; c<4; c++){
      console.log(r,c);
    }
  }
}

// all drawing happens here, but only once because of the noLoop() at the end
function draw() {
  stroke(10);
  strokeWeight(1);
  noFill();
  rect(50, 50, 200, 300);
  allValues();
}

function allValues() {
  let a = answers.Calories;
  let mappeda = map(a, 0, 300, 350, 50);
  stroke("#C58930");
  strokeWeight(10);
  line(100, 350, 100,mappeda);
  let b = answers.Caffeine;
  let mappedb = map(b, 0, 300, 350, 50);
  stroke("#C58930");
  strokeWeight(10);
  line(130, 350, 130, mappedb);
 let c = answers.Carbs;
let mappedc = map(c, 0, 180, 0, 30);
  fill("#C58930");
circle (200,300,c)
   let d = answers.Sugar;
let mappedd = map(d, 0, 50, 30, 40);
  fill("#C58930");
circle (200,200,d)
}

//   for (let row = 0; row < table.getRowCount(); row++) {
//     // getNum() method takes two arguments: first is the row index, and second is the column index
//     // if we pass in 5, then we are grabbing data for this row from column number 6
//     // you can change the number to access different columns in the CSV
//     let value = table.getNum(row,5)

//     // map this value onto a range of pixels using the min/max of the dataset
//     let x = map(value,1970,2019,0,width)

//     // this variable is hardcoded, but you could also use another map() to add more data!
//     let y = height/2;

//     // draw a circle using the x and y variables above
//     ellipse(x, y, 5)
//   }

//   // this function prevents p5 from looping over and over, since we don't need animation
//   noLoop()
