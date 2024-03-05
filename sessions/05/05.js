function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // this can be corrected by using let
    // arr.push(function () {
    //   console.log(i);
    // });

    (function (j) {
      arr.push(function () {
        console.log(j);
      });
    })(i);
  }
  return arr;
}

var arr = buildFunctions();
arr[0](); // 3
arr[1](); // 3
arr[2](); // 3

console.log("--------------------------------------");
// Call/Apply/bind
function greet(city, country) {
  console.log(
    `Hello ${this.name}! Your age is ${this.age}. You live in ${city}, ${country}`
  );
}

const person = { name: "Harsh", age: 26 };

greet.call(person, "Indore", "India");

greet.apply(person, ["Indore", "India"]);

const f = greet.bind(person, "Indore", "India");
f();

