function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: "Harsh",
  lastName: "Bairagi",
};

// Function.prototype.myCall = function (context, ...args) {
//   context.myFn = this;
//   context.myFn(...args);
// };

Function.prototype.myCall = function (context, ...args) {
  let currentContext = context || globalThis;
  let randomProp = Math.random();
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  currentContext[randomProp] = this;
  let result = currentContext[randomProp](...args);
  delete currentContext[randomProp];
  return result;
};

// printName.myCall(myName, "Indore", "India");

Function.prototype.myApply = function (context, args) {
  let currentContext = context || globalThis;
  let randomProp = Math.random();
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  currentContext[randomProp] = this;
  let result = currentContext[randomProp](...args);
  delete currentContext[randomProp];
  return result;
};

// printName.myApply(myName, ["Indore", "India"]);

Function.prototype.myBind = function (...args) {
  var callback = this,
    otherArgs = args.splice(1); // all arguments after the this reference
  return function (...a) {
    callback.call(args[0], ...[...otherArgs, ...a]);
  };
};

const result = printName.myBind(myName, "Indore");
result("India");

Function.prototype.myCall = function (obj, ...args) {
  let sym = Symbol();
  obj[sym] = this;
  const res = obj[sym](...args);
  delete obj.sym;
  return res;
};

Function.prototype.myApply = function (obj, args) {
  let sym = Symbol();
  obj[sym] = this;
  const res = obj[sym](...args);
  delete obj[sym];
  return res;
};

Function.prototype.myBind = function (obj, ...args) {
  const fn = this;
  return function (...a) {
    fn.myCall(obj, ...args, ...a);
  };
};

const person1 = {
  name: "Harsh",
  greet: function (city, state) {
    console.log(`${this.name} from ${city}, ${state}`);
  },
};

const person2 = {
  name: "Pawan",
};

// person1.greet("Indore", "Madhya Pradesh");
// person1.greet.call(person2, "Jaipur", "Rajasthan");
// person1.greet.apply(person2, ["Jaipur", "Rajasthan"]);
// const person2Greet = person1.greet.bind(person2);
// person2Greet("Jaipur", "Rajasthan");
// person1.greet.myCall(person2, "Jaipur", "Rajasthan");
// person1.greet.myApply(person2, ["Jaipur", "Rajasthan"]);
const f = person1.greet.myBind(person2, "Jaipur", "Rajasthan");
f();
