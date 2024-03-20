// const func = () => console.log(val);
// func();
// let val = 3;
// var val = 3;

// ref/type(const,function)/syntax/aggregator
// AggregateError => when all the promise in any API are rejected
// Promise.any([])

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected 1");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved 2");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected 3");
  }, 5000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// TODO: Errors
