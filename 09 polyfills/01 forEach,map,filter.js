Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this); // element, index, array
  }
};

Array.prototype.myMap = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

Array.prototype.myFilter = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

Array.prototype.mySome = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return true;
  }
  return false;
};

Array.prototype.myEvery = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) return false;
  }
  return true;
};

const res = [2, 4, 6].myEvery((el) => el % 2 === 0);
console.log("Result: ", res);
