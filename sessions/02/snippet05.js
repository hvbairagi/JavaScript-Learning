// Youtube
// 1
function show() {
  this.lang = "React";
  this.showLang = () => {
    console.log(this.lang);
  };
}

const data = new show();
const fn = data.showLang;
fn();

// Output -> "React" -> arrow function inherits this

// 2
var x = [typeof x, typeof y][1];
console.log(typeof typeof x);

// Output -> 'string'

// 3
console.log([] == "");
// Output -> true -> [] -> "" (coercion)
console.log([] == []);
// Output -> false -> different reference
// in == case if the type is same then the == internally
// uses ===

// 4
// Q:   is console.log() part of js?
// Ans: No, it is part of browser
// Similarly -> setTimeout fetch Promise

// To check what is part of js and what is not
// check window object, all things part of window object
// are not part of js

// 5
// function switch (num) {
//   console.log(~~num)
// }

// switch(1.2)

// Output -> Syntax error, unexpected token 'switch'
// switch is a reserved keyword

// 6
console.log(~1.9);
// Output -> -1 -> bitwise NOT operator
// similar to Math.floor()

// 7
console.log(~~1.9);
// Output -> 1.9 -> -1 -> 1
// ~ of -ve is +ve

// 8
function sum(nums) {
  var result = 0;
  for (var i = 0; i <= nums.length; i++) {
    result += nums[i];
  }
  return result;
}

var numbers = [1, 2, 3, 4, 5];
console.log("Result: " + sum(numbers));

// Output -> Result: Nan
// for exit condition, index out of bound

// 9
function show() {
  this.name = "Vivekanand";
  return { name: "Bhagat" };
}
const superhero = new show();
console.log(superhero.name);

// Output -> Bhagat

// 10
const score = [10, 330, 2, 70];
score.sort();
// score.sort((a, b) => a - b); -> will sort as numbers
console.log(score);
// Output -> [10, 2, 330, 70]
// sort return value -> (a,b) =>
// 0 -> keep original
// >0 -> [b,a]
// <0 -> [a,b]

// 11
function getData(a, b, ...rest) {}
function getData(a, b = 0, c) {}
console.log(getData.length);

// Output -> 2, 1

// 12
const button = document.getElementById("btn");
for (let i = 0; i < 5; i++) {
  button.addEventListener("click", () => {
    console.log("button clicked", i);
  });
}

// Output ->
// button clicked 0
// button clicked 1
// button clicked 2
// button clicked 3
// button clicked 4
// we can attach event listener multiple times on an element
// this is a bad practice
// To overcome this. do this ->
for (let i = 0; i < 5; i++) {
  button.onclick = () => console.log("button clicked", i);
}

// 13
function showMessage(marks) {
  const message = marks || " absent";
  console.log(`marks ${message}`);
}
showMessage(20); // -> marks 20
showMessage(0); // marks absent

// To overcome this use ?? in place of ||

// 14
(100)["toString"].length + 1; // -> 2

// 15
var foo = "outer foo";
function showName() {
  foo = "inner foo";
  return;
  function foo() {}
}
showName();
console.log(foo);

// Output -> "Outer foo"

// 16
const str = "Hey JS! You R AMAZING";
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(data) {
  let count = 0;

  data = data.toLowerCase();
  // for (let ch of data) {
  //   count = vowels.includes(ch) ? count + 1 : count;
  // }
  data
    .toLowerCase()
    .split("")
    .forEach((ch) => vowels.includes(ch) && count++);
  return count;

  return count;
}

countVowels(str);

// 17
let num = 0;
setInterval(() => {
  console.log(num++);
}, 1000);

// Q: Will the timer run if we change tab?
// A: The timer will get suspended if we change tab

// 18
console.log(randomVariable);
// Output -> Reference error: not defined

// 19
function jsIsAwesome() {
  console.log("Hey");
}
console.log(jsIsAwesome.name);
// Output -> 'jsIsAwesome'
// This can be used for function name caching
// if(memo[fn.name]){}

// 20
const obj = Object.create(null);
const keyToCheck = "randomKey";

if (obj.hasOwnProperty(keyToCheck)) {
  console.log("Key found.");
} else {
  console.log("Key not found.");
}

// Object created from null is -> {}
// it's prototype chain is empty
// Output -> TypeError: obj.hasOwnProperty is not a function
// instead use Object.hasOwn(obj, keyToCheck)
// Also hasOwnProperty can be overridden so use
// Object.hasOwn(obj, property)

// 21
const obj = {};
let key = "constructor";

if (key in obj) {
  console.log("Key found");
} else {
  console.log("Key not found");
}

// Output -> 'Key found'
// 'in' operator will check in the prototype chain
// to overcome this use Object.hasOwn()/obj.hasOwnProperty()

// 22
const number = 5;
console.log(number.toString()); // -> '5'
console.log(number.toString(2)); // -> '101'

// 23
const promise = new Promise((_, reject) => {
  reject();
});

const res = promise
  .then(() => console.log("then"))
  .catch(() => console.log("catch"))
  .then(() => console.log("then after catch"));

// Output -> catch -> then after catch
// 'then' returns a resolved promise as does 'catch'
// so 'catch' can be further chained with additional 'then'

// 24
console.log([43, 31] > [89]); // '[43,31]' > '[89]' -> false (4 < 89)
console.log([3] > [2]); // '[3]' > '[2]' -> true
// array is converted to string and strings are compared character by character
// [ is compared with [ then 4 is compared with 8

// 25
function isPass() {
  console.log("inside isPass");
  return "Pass";
}

function isTopper() {
  console.log("inside isTopper");
  return "Topper";
}

const msg = isPass() && isTopper(); // -> msg: Topper
// const msg = isPass() && isTopper() && "Harsh"; // -> Harsh
console.log(`msg: ${msg}`);
// Output: msg: Topper
// last value with be returned in such a && chain

// 26
const x = (1, 2, 3, 4);
console.log("x=", x); // -> x=4
// we can write multiple js expressions separated by ,
// the value would be equal to the value of the expression executed at last

// 27
let { x, x: y } = { x: 2 };
console.log("x=", x); // -> 2
console.log("y=", y); // -> 2
// renaming x to y is important as it will give
// Syntax error: Identifier x has already been declared

// 28
const name = "JS";
function show(a, b) {
  console.log("a=", a); // (2) ['hey ', ' Welcome', raw: Array(2)]
  console.log("b=", b); // JS
}

show`hey ${name}, Welcome`; // Tagged Template Literal
// first param will be the string with variables in an array
// further params will be the variables
// In JS functions can be invoked without parenthesis with back ticks

// 29
function madhushala() {
  return foo;
  console.log("YO");
  foo = 10;
  function foo() {}
  var foo = 11;
}

console.log(typeof madhushala()); // function
// while hoisting functions are given more priority then var/let/const

// 30
if ([]) {
  // [] is a truthy value
  console.log("chai");
}

if ([] == false) {
  // [] -> (convert to string) '' -> (convert to number) 0 -> 0 == 0 -> true
  console.log("cookie");
} else {
  console.log("pizza");
}
