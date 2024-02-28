// const res = sum(1, 2, 3, 4, 5);
// console.log("Result: ", res);

// function sum(...args) {
//   let sum = 0;
//   for (let num of args) {
//     sum += num;
//   }
//   return sum;
// }

let result = 0;
const res = sum(1)(2)(3)(4)(5)(); // TODO
console.log("Result: ", res);

function sum(num1, num2) {
  if (num2 !== undefined) {
    return num1 * num2;
  }
  return function (num2) {
    return num1 * num2;
  };
}
