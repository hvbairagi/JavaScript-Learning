// 03/02/2024

// push/pop always better then shift and unshift
// Reason -> Time Complexity / Re-Indexing

// if we can create our own Data Structure
// then for shift unshift we can create LinkedList

const arr = [1, 2, 3];

Array.prototype.myMap = function (callback) {
  // map returns a new copy
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i));
  }
  return arr;
};

// T->O(N)
// S->O(N)

const result1 = arr.map((x, i) => 3 * x + i);
const result2 = arr.myMap((x, i) => 3 * x + i);
console.log(arr, result1, result2);
