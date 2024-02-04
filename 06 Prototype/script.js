Array.prototype.myMap = function (callback) {
  console.log(callback, this);
};

function myFunc(el) {
  console.log(el);
}

[1, 2, 3].map(myFunc);
