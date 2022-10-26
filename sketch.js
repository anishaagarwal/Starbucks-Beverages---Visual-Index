let table;
let numRows;
let numCols;

function preload() {
  table = loadTable("./starbucks_coffee.csv", "csv", "header");
}

function setup() {
  createCanvas(1300, 1300);
  background(255);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //console.log(numRows, numCols);
  //console.log(table);

  let counter = 0;
  for (let r = 0; r < 6; r++) {
    //console.log("outer loop");
    for (let c = 0; c < 4; c++) {
      rect(r * 200, c * 300, 200, 300);
      counter++;
      console.log(counter);
      beverage (0,0,0);
      //let x=table.getNum(counter, 3);
      //console.log(x);
    }
  }
}

function beverage(r, c, counter) {
  let x = r * 200;
  let y = c * 300;
  let caffeine = table.getNum(counter, 3);
  let mapCaf = map(caffeine, 0, 300, y + 300, y);
  stroke("#C58930");
  strokeWeight(10);
  line(x + 30, y + 300, x + 30, mapCaf);
}

//function draw() {
//for (let i = 0; i < numRows; i++) {
// console.log(table.rows[i].obj['Caffeine (mg)']);
// let x = r * 200;
// let y = c * 300;
//console.log(i)
//beverage(0, 0, i);
//}

// stroke("#C58930");
// strokeWeight(10);
// line(x + 30, y + 300, x + 30, mapCaf);
//}

// FOR LOOP ITERATING OVER DATA GOES HERE

// noFill();
// for (let x = 50; x < width; x += 50) {
//   for (let y = 50; y < height; y += 50) {
// //     rect(x, y, 200, 300);
//   }
// }

// //creating a function for all values to be plotted
// function beverage(r, c, index) {
//   let x = r * 200;
//   let y = c * 300;
//   let caffeine = table.getNum(index, 3);
//     let mapCaf = map(caffeine, 0, 300, y + 300, y);
//   stroke("#C58930");
//   strokeWeight(10);
//   line(x + 30, y + 300, x + 30, mapCaf);
// for (let i = 0; i < numRows; i++) {
//   // console.log(table.rows[i].obj['Caffeine (mg)']);
//   let x = r * 200;
//   let y = c * 300;
//   let caffeine = table.getNum(i, 3);
//   let mapCaf = map(caffeine, 0, 300, y + 300, y);
//   stroke("#C58930");
//   strokeWeight(10);
//   line(x + 30, y + 300, x + 30, mapCaf);
// }

//   let a = answers.Calories;
//   let mappeda = map(a, 0, 300, 350, 50);
//   stroke("#C58930");
//   strokeWeight(10);
//   line(80, 350, 80, mappeda);
//   let b = answers.Caffeine;
//   let mappedb = map(b, 0, 300, 350, 50);
//   stroke("#C58930");
//   strokeWeight(10);
//   line(110, 350, 110, mappedb);
//   let c = answers.Carbs;
//   let mappedc = map(c, 0, 180, 0, 80);
//   fill("#C58930");
//   circle(180, 300, mappedc);
//   let d = answers.Sugar;
//   let mappedd = map(d, 0, 180, 0, 80);
//   fill("#C58930");
//   circle(200, 200, mappedd);
// }
