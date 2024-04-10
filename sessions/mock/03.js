// let x = 10;

// function outer() {
//   console.log(x);

//   if (false) {
//     var x = 20;
//   }
// }

// outer(); // 10

// let x = 10;

// function outer() {
//   console.log(x);

//   if (true) {
//     var x = 20;
//   }
// }

// outer(); // 20

// console.log(typeof 42); // number
// console.log(typeof "Hello"); // string
// console.log(typeof true); // boolean
// console.log(typeof [1, 2, 3]); // object
// console.log(typeof { name: "John", age: 25 }); // object
// console.log(typeof null); // object
// console.log(typeof undefined); // object(wrong) // undefined
// console.log(typeof function () {}); // object(wrong) // function

function myFn() {
  console.log("Hello world");
}

console.log(typeof myFn); // function
console.log(typeof myFn()); // undefined
