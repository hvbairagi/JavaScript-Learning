// Closure questions

function sum(a) {
  let currentSum = a;

  function addNext(b) {
    currentSum += b;
    return addNext;
  }

  // the value of property is to be taken as function
  // so that it can be executed at last to take the latest value of currentSum
  // if it is taken as value then it will take the currentSum value as the first passed value
  addNext.valueOf = function () {
    return currentSum;
  };
  return addNext;
}

const result = sum(1)(2)(3);
console.log(result.valueOf());

function sum2(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sum2(1, 2, 3, 0, 1, 0));
console.log("-------------------------------------------------");
// Private counter
function counterFn() {
  let counter = 0;

  function increment() {
    counter++;
  }

  function decrement() {
    counter--;
  }

  function getCounter() {
    console.log("Counter: ", counter);
  }

  function giveCounter() {
    // Primitives are passed by value
    // Objects are Reference passed by value
    return counter;
  }

  return { increment, decrement, getCounter, giveCounter };
}

const counter = counterFn();
counter.increment();
counter.getCounter();
let c = counter.giveCounter();
console.log("c: ", c);
c = 5;
counter.getCounter();
