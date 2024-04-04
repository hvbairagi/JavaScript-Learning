const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

// Promise.all([p1, p2, p3])
//   .then( )
//   .catch((err) => console.log(err));
// all resolve -> resolve -> [r1,r2,r3]
// any reject -> rejected -> rejected

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log("then: ", res))
//   .catch((err) => console.log("catch: ", err));
// [{status: fulfilled, value: res}] // fulfilled
// [{status: rejected, reason: res}] // reject
// never goes to catch

// Promise.any([p1, p2, p3])
//   .then((res) => console.log("then: ", res))
//   .catch((err) => console.log("catch: ", err.errors));

// err -> aggregate error, err.errors -> rejected value
// resolved res

// Promise.race([p2, p1, p3])
//   .then((res) => console.log("then: ", res))
//   .catch((err) => console.log("catch: ", err));

// the value first initialized is the first result
// order of promises inside array does not matter
// tekion/intuit - promise polyfill, servicenow/cisco call bind apply polyfill

async function asyncFn() {
  try {
    const res1 = await p1;
    console.log(res1);
    const res2 = await p2;
    const res3 = await p3;
    console.log(res1, res2, res3);
  } catch (err) {
    console.log(err);
  }
}

function sum(n) {
  setTimeout(() => {
    const sum = (n * (n + 1)) / 2;
    console.log("Sum: ", sum);
  }, 1000);
}

asyncFn();
sum(10);
