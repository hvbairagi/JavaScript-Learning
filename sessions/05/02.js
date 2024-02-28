// currying

// everything is stored in memory heap
// garbage collected if not used
function outer() {
  var a = 0; // would be saved in heap memory
  var b;
  return function inner() {
    console.log(a);
  };
}

// Closure = hoisting + scope + Lexical env + prototype(in garbage collection)

const inner = outer();

// ...

inner();
