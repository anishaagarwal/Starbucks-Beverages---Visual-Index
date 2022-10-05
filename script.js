console.log("Hello, world!");

const value = 5;
const newValue = 20;
const val = "this is a string!"

const fruits = ["apple", "mango", "strawberry", "melon", "banana"]

console.log(fruits)

for (let i = 0; i < ; i++) {
  console.log(fruits[i])
  // this line of code will create a new HTML p element
  let el = document.createElement("p");

  // this line of code will assign text inside of the element created above
  el.innerHTML = fruits[i];

  // this code will grab the element with id "answer" and add something to it
  document.getElementById("answer").appendChild(el)
}


/////////////////////////////////////////
// SOME LINES TO USE FOR THE CHALLENGE//
////////////////////////////////////////

// this line of code will create a new HTML p element
let el = document.createElement("p");

// this line of code will assign text inside of the element created above
el.innerHTML = "some text";

// this code will grab the element with id "answer" and add something to it
// document.getElementById("answer").appendChild(el)