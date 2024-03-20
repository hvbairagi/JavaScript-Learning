// let p1 = { name: "Mohit" };
// let p2 = { name: "Mohit" };
// const m1 = [p1];
// const m2 = [p2];
// p1 = null;
// p2.name = null;
// console.log(m1, m2);

// TODO: debug

// console.log([..."Pune", "Delhi", ..."Mumbai"]);

// function welcomeMessage(name) {
//   setTimeout(() => {
//     return `Hello ${name}!`; // never return from setTimeout
//   }, 0);
// }
// console.log(welcomeMessage("Mohit"));

// function welcomeMessage(name) {
//   setTimeout(() => {
//     return `Hello ${name}!`; // never return from setTimeout
//   }, 0);
// }
// console.log(welcomeMessage("Mohit"));

// function welcomeMessage(name) {
//   setTimeout(() => {
//     console.log(`Hello ${name}!`);
//   }, 0);
// }
// welcomeMessage("Mohit");

// Hello Mohit!

// const promise = new Promise((res) => res(4));
// promise
//   .then((p) => {
//     console.log(p); // 4
//     return p * 4;
//   })
//   .then((p) => {
//     console.log(p); // 16
//     return p * 4;
//   })
//   .finally((p) => {
//     console.log(p); // undefined // finally does not take any parameter
//     return p * 4;
//   })
//   .then((p) => {
//     console.log(p); // 64
//   });

