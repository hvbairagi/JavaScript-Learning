// Currying example - ADV JS Concept
// mechanism to evaluate sequence of fn by passing diff/multiple parameters

function sum(a) { // a + b + b 
  function addNext(b) { // b
    a += b;
    return addNext;
  }

  addNext.myValue = function () {
    return a;
  };

  return addNext;
}

// sum -> addNext 

const res = sum(1)(2)(3)(4);
console.log(res.myValue());
