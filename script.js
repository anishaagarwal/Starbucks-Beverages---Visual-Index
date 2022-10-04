/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

console.log('my page')

const value = 5;
const anotherValue = 10;

document.getElementById("answer").innerHTML = value * anotherValue;

console.log(typeof value)

function addValue() {
  const prevValue = document.getElementById("answer").innerHTML;
  console.log(typeof prevValue)
  
  document.getElementById("answer").innerHTML = Number(prevValue)+1;
}