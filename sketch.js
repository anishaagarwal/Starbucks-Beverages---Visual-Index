let table;
let numRows;
let numCols;
let answers = {
  Calories: "100",
  Caffeine: "",
  Carbs: "",
  Sugar: "",
};

function preload() {
  table = loadTable("./Starbucks_coffee.csv", "csv", "header");
}

function setup() {
  createCanvas(200, 300);
  background(255, 255, 255);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
}

// all drawing happens here, but only once because of the noLoop() at the end
function draw() {

 let a = answers.Calories;
  let mappeda = map(a, 0, 280, 300, 0);
  stroke("#C58930");
  strokeWeight(5);
  line(20, 0, 20, mappeda);
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
