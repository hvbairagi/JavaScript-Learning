const func = () => console.log(val);
let val = 3;
func(); 

// 3

const func = () => console.log(val);
func(); 
let val = 3;	



let p1 = { name: "Mohit" };
let p2 = { name: "Mohit" };
const m1 = [p1];
const m2 = [p2];
p1 = null;
p2.name = null;
console.log(m1, m2); 

// [null], [{name: null}]

console.log([..."Pune", "Delhi", ..."Mumbai"]);
// ['P', 'u', 'n', 'e', "Delhi", 'M', 'u','m','b','a','i']

let str = "b" + "a" + +"a" + "a";
console.log(str.toLowerCase()); // banana

// Prototype