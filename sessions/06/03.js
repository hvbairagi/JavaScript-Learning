const resolve = () => {
  // console.log("Resolved.");
};
const reject = () => {
  // console.log("Rejected.");
};

const p = new Promise((resolve, reject) => {
  if (false) {
    return resolve("Resolved");
  } else {
    return reject("Rejected");
  }
});

p.then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Task completed."));

// Read Create promises
