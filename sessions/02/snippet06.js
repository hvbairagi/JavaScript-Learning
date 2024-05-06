// 1
console.log("A");
setTimeout(() => {
  console.log("B");
});

["C", "D"].forEach((x) => console.log(x));
console.log("E");

// Output: A, C, D, E, B

// 2
const data = [
  { key: "Sample 1", data: "data1" },
  { key: "Sample 1", data: "data1" },
  { key: "Sample 2", data: "data1" },
  { key: "Sample 2", data: "data1" },
  { key: "Sample 2", data: "data1" },
  { key: "Sample 3", data: "data1" },
  { key: "Sample 4", data: "data1" },
  { key: "Sample 4", data: "data1" },
];

const result = {};
data.forEach((el) => {
  if (result[el.key]) {
    result[el.key].push(el);
  } else {
    result[el.key] = [el];
  }
});

const result2 = data.reduce((acc, el) => {
  if (acc[el.key]) acc[el.key].push(el);
  else acc[el.key] = [el];
  return acc;
}, {});

console.log(result2);

// 3
