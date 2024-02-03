//document.getElementById("count-el").innerText = 5;

// let count = 0;
// console.log(count);
//1.create a variable, myAge, and set its value to your age.
//2. log the myAge variable to the console.
// let myAge = 19;
// console.log(myAge);
// let firstBatch = 10;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);
// let count = 5;
// count = count + 1;
// console.log(count);

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

//onclick - event listener
// function increment() {
//   document.getElementById("count-el").innerHTML =
//     parseInt(document.getElementById("count-el").innerHTML) + 1;
// }
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  //render countEl variable with innerText
  countEl.textContent = count;
}
function save() {
  let countDash = " & " + count;
  if (saveEl.innerText == "Previous entries:") {
    countDash = count;
  }
  saveEl.textContent += countDash;
  console.log(count);
}
function reset() {
  countEl.textContent = 0;
  count = 0;
}
