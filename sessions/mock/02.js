// input
const arr1 = [
  0,
  1,
  2,
  [3, 4, [5, 6, 7, [8, 9, ["abc", 10, [{ name: "Harsh" }, null]]]]],
];

function flatten(arr) {
  let result = [];
  for (let e of arr) {
    if (Array.isArray(e)) {
      result.push(...flatten(e));
    } else {
      if (typeof e === "number") {
        result.push(e);
      }
    }
  }
  return result;
}

console.log(flatten(arr1));

//output
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
