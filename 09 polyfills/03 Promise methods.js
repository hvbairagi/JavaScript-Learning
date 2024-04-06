const p1 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Resolved p1");
  }, 500)
);

const p2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Resolved p2");
  }, 600)
);

const p3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Resolved p3");
  }, 700)
);

Promise.prototype.myRace = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};

Promise.prototype.myAll = function (values) {
  const promise = new Promise((resolve, reject) => {
    const result = [];
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === values.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
  return promise;
};

Promise.myAll([p1, p2, p3]);
