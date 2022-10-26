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
  for (let c = 0; c < 6; c++) {
    console.log("outer loop");
    for (let r = 0; r < 4; r++) {
      strokeWeight(1);
      stroke(20);
      rect(c * 200, r * 300, 200, 300);
       console.log("inner loop");
      counter++;
      console.log(counter);
      beverage (0,0,0);
      beverage (1,0,1);
      beverage (2,0,2);
      beverage (3,0,3);
      beverage (4,0,4);
      beverage (5,0,5);
      beverage (0,1,6);
      beverage (1,1,7);
      beverage (2,1,8);
      beverage (3,1,9);
      beverage (4,1,10);
      beverage (5,1,11);
      beverage (0,2,12);
      beverage (1,2,13);
      beverage (2,2,14);
      beverage (3,2,15);
      beverage (4,2,16);
      beverage (5,2,17);
      beverage (0,3,18);
      beverage (1,3,19);
      beverage (2,3,20);
      beverage (3,3,21);
      beverage (4,3,22);
      beverage (5,3,23);
      
      //let x=table.getNum(counter, 3);
      //console.log(x);
    }
  }
}

function beverage(c, r, counter) {
  let x = c * 200;
  let y = r * 300;
  let caffeine = table.getNum(counter, 3);
  let mapCaf = map(caffeine, 0, 300, y + 300, y);
  stroke("#C58930");
  strokeWeight(10);
  line(x + 30, y + 300, x + 30, mapCaf);
  let calories=table.getNum(counter,)
}
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
