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
