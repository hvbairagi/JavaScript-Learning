"use strict"; // strict mode always in 1st line

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

Array.prototype.myFilter = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return true;
  }
  return false;
};

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) return false;
  }
  return true;
};

// TODO: create for find

// console.log([1, 2, 3, 4].myEvery((el) => el % 1 === 0));
// NOTE: when interacting with DOM, gives window object
// console.log(this); // global

function f() {
  // who called
  // this substitution (in non strict mode)
  // undefined in strict mode
  console.log(this); // global
}

const f2 = () => {
  // Arrow does not have its own this.
  // borrows from parent / from lexical environment
  console.log(this); // global
};

// in strict mode
// f(); // this = undefined
// window.f(); // this = window
// f2();

// const person = {
//   name: "Harsh",
//   getName: function () {
//     console.log(this);

//     function abc() {
//       console.log(this);
//     }
//     // abc();
//   },

// };

// person.getName();

// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//   console.log(this); // button
// });

const obj1 = {
  name: "Harsh",
  lastName: "Bairagi",
  getFullName: function () {
    console.log(`${this.name} ${this.lastName}`);
  },
  getFullNameArrow: () => {
    console.log(`${this.name} ${this.lastName}`);
  },
};

obj1.getFullName(); // function declaration // Harsh Bairagi
obj1.getFullNameArrow(); // undefined undefined

const obj2 = {
  name: "Aman",
  lastName: "Jaiswal",
};

obj1.getFullName.call(obj2); // method borrowing
obj1.getFullName.apply(obj2);
obj1.getFullName.bind(obj2)();
// TODO: call/bind/apply work, difference and polyfill


[5,2,2,2,1,3,2,4,2].find()