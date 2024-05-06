// 1. Memoize function result

function memoizeOne(fn) {
  // const memo = {};
  const memo = new Map();
  return function (a, b) {
    // if (memo[a * b]) return memo[a * b];
    // memo[a * b] = fn.call(this, a, b);
    // return memo[a * b];
    if (memo.has(a * b)) return memo.get(a * b);
    memo.set(a * b, fn.call(this, a, b));
    return memo.get(a * b);
  };
}

const add = (a, b) => {
  console.log("add executed");
  return a + b;
};

const sub = (a, b) => {
  console.log("sub executed");
  return a - b;
};

const memoizeAdd = memoizeOne(add);
const memoizeSub = memoizeOne(sub);

console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(2, 2));
console.log(memoizeAdd(2, 2));
console.log("---------------");
console.log(memoizeSub(1, 2));
console.log(memoizeSub(1, 2));
console.log(memoizeSub(2, 2));
console.log(memoizeSub(2, 2));

// 2. Flatten Array
function flatten(arr) {
  const result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      result.push(...flatten(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

const arr = [1, 2, 3, [4, [5, 6]], 7, 8];
console.log(flatten(arr));
