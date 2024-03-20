const vdom = document.createFragment();
const ul = document.createElement('ul')
for(let i = 0; i < 500; i++){
	const li = document.createElement('li');
	li.innerText("num: " + i)
	ul.appendChild(li);
}
vdom.append(ul);
document.append(vdom); // dom manipulation



let inputArray = ["aman", "rahul", "shiva", "gautam"];
inputArray.sort();
console.log(inputArray);
// ["aman", "gautam", "rahul", "shiva"]

let inputArray2 = [1, 40, 20, 100, 1000, 200, 300, 30, 4000]; // ascending
console.log(inputArray2.sort((a,b) => b-a))

// [1, 20, 30, 40, 100, 200, 300, 1000, 4000]








let arr = [1,2,3]

let res = arr.splice(0,1) // arr = [2,3] , res = [1]

let arr1 = [1,2,3,4];
let s = arr1.slice(0,1) // arr1 = [1,2,3,4], s = [1]




var a = 10; // window.a = 10
if(true) { // window.a = 20
	var a=20;
	console.log('a',a); // a 20
}
console.log('a',a); // a 20



let inputArray = ["aman", "rahul", "shiva", "gautam"];

Array.prototype.capitalize = function (){
	const arr = [];
	for(let i = 0; i < this.length; i++){
		const string = this[i].slice(0,1).toUpperCase() + this[i].slice(1, this[i].length-1) + this[i].slice(this[i].length-1).toUpperCase();
		arr.push(string);
	}
	return arr;
}

const result = inputArray.capitalize();
console.log(result); 
// ["Aman", "Rahul", "Shiva", "Gautam"]