let obj1 = {
  name1: "julie",
  name2: "anna",
  name3: "robert",
  name4: "adam",
  name: "satya",
};

for (let value in obj1) {
  const key = obj1[value];
  obj1[key] = value;
  delete obj1[value];
}

console.log(obj1);
