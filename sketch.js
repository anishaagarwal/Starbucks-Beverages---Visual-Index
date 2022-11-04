let table;
let numRows;
let numCols;
//Loading the dataset
function preload() {
  table = loadTable("./starbucks_coffee.csv", "csv", "header");
}

function setup() {
  createCanvas(1200, 1200);

  background("#efede7");
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //console.log(numRows, numCols);
  //console.log(table);

  //Creating a counter
  let counter = 0;
  //Creating a grid of 6 columns and 4 rows
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 4; r++) {
      strokeWeight(20);
      stroke("#ffffff");
      noFill();
      rect(c * 200, r * 300, 200, 300);
      // Incrementing the counter by 1 such that it loops throigh every row in the dataset
      beverage(r,c,counter)
      counter++;
      
      
      // beverage(0, 0, 0);
      // beverage(1, 0, 1);
      // beverage(2, 0, 2);
      // beverage(3, 0, 3);
      // beverage(4, 0, 4);
      // beverage(5, 0, 5);
      // beverage(0, 1, 6);
      // beverage(1, 1, 7);
      // beverage(2, 1, 8);
      // beverage(3, 1, 9);
      // beverage(4, 1, 10);
      // beverage(5, 1, 11);
      // beverage(0, 2, 12);
      // beverage(1, 2, 13);
      // beverage(2, 2, 14);
      // beverage(3, 2, 15);
      // beverage(4, 2, 16);
      // beverage(5, 2, 17);
      // beverage(0, 3, 18);
      // beverage(1, 3, 19);
      // beverage(2, 3, 20);
      // beverage(3, 3, 21);
      // beverage(4, 3, 22);
      // beverage(5, 3, 23);
    }
  }
}

//Creating a function with all the element styles to be plotted on the visaul index. The function will take 3 arguments: row no., column no., (to specify position on grid) and counter (to specify which row in the dataset is to be plotted)

function beverage(c, r, counter) {
  let x = c * 200;
  let y = r * 300;
  console.log(counter)
  let caffeine = table.getNum(counter, 3);
  let mapCaf = map(caffeine, 0, 300, y + 280, y);
  stroke("#49281A");
  strokeWeight(10);
  line(x + 30, y + 280, x + 30, mapCaf);
  let calories = table.getNum(counter, 2);
  let mapCal = map(calories, 0, 300, y + 280, y);
  stroke("#C58930");
  strokeWeight(10);
  line(x + 50, y + 280, x + 50, mapCal);
  let sugar = table.getNum(counter, 5);
  let mapSug = map(sugar, 0, 50, 0, 80);
  noStroke();
  fill("#d5af95");
  circle(x + 150, y + 150, mapSug);
  let carbs = table.getNum(counter, 4);
  let mapCarbs = map(carbs, 0, 190, 0, 80);
  noStroke();
  fill("#0a3b4a");
  circle(x + 120, y + 250, mapCarbs);
  let drink = table.getString(counter, 0);
  textSize(12);
  textAlign(RIGHT);
  fill("#368467");
  textWrap(WORD);
  text(drink, x + 70, y + 40, 100);
}
