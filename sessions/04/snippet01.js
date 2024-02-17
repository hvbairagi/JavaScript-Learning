// Object.setPrototypeOf(child2, child1);
const parent = { name: "zero" };
const child1 = { name: "one" };
child1.__proto__ = parent;
const child15 = Object.create(child1);
child15.name = "one.five";
const child2 = Object.create(child15);
child2.name = "two";
const child3 = Object.create(child2);
child3.name = "three";

console.log(child3);

function Person(name) {
  this.name = name; // gets attached to new instance
}

const person = new Person("Harsh");
console.log(person);

// new
// 1. creates new object (instance)
// 2. this refers to new object (inside constructor function or class)
// 3. new instance prototype refers to the constructor function -> Object -> null
// TODO: read about 'this'
// create polyfills
// TODO: to practice: OOPS: inheritance in js (java examples)