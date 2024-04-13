const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
            random: [4, 5],
          },
        },
        stuffValue: 36,
      },
    },
  },
  anotherData: [{ arrayVal: { testVal: [69] } }],
};

function contains(obj, value) {
  // Deep equality check for arrays
  function arraysEqual(arr, value) {
    if (arr.length !== value.length) return false;
    for (let i = 0; i < arr.length; i++) {
      if (!isEqual(arr[i], value[i])) return false;
    }
    return true;
  }

  // Deep equality check for objects
  function isEqual(obj, value) {
    if (typeof obj !== typeof value) return false;
    // Number/String/Boolean/Undefined/Function check
    if (typeof obj !== "object") return obj === value;
    // Array check
    if (Array.isArray(obj) && Array.isArray(value))
      return arraysEqual(obj, value);
    // Object check
    const keys1 = Object.keys(obj);
    const keys2 = Object.keys(value);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
      if (!keys2.includes(key) || !isEqual(obj[key], value[key])) return false;
    }
    return true;
  }

  // Base case if the object is equal to target value (including arrays), return true
  if (isEqual(obj, value)) return true;

  // Base case: If obj is not an object or array, return false
  // typeof !== 'object' means type is number/string/boolean/undefined/function
  // this check is already done in 'isEqual' function thats why returning false here
  // TODO: Why doing it twice
  // Null check
  if (typeof obj !== "object" || obj === null) return false;

  // Recursive case for objects
  for (const key in obj) {
    if (contains(obj[key], value)) return true;
  }

  // If the value is not found in the object, return false
  return false;
}

console.log(contains(nestedObject, 36));
console.log(contains(nestedObject, 4));
console.log(
  contains(nestedObject, {
    magicNumber: 44,
    something: "foo2",
    random: [4, 5],
  })
);
console.log(contains(nestedObject, [4, 5]));
console.log(contains(nestedObject, [99, 42]));
console.log(
  contains(nestedObject, {
    magicNumber: 73,
    something: "foo3",
  })
);
