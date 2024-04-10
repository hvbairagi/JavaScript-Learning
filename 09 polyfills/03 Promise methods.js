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

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      Promise.resolve(p).then(resolve, reject).catch(reject);
    });
  });
};

Promise.myAll = function (promises) {
  const promise = new Promise((resolve, reject) => {
    const result = [];
    let total = 0;
    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
  return promise;
};

Promise.myAllSettled = function (promises) {
  const mappedPromises = promises.map((p) =>
    p
      .then((value) => {
        return { status: "fulfilled", value };
      })
      .catch((reason) => {
        return { status: "rejected", reason };
      })
  );
  return Promise.all(mappedPromises);
};

Promise.myAny = function (promises) {
  const promiseErrors = new Array(promises.length);
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(resolve)
        .catch((error) => {
          promiseErrors[index] = error;
          counter++;
          if (counter === promises.length) reject(promiseErrors);
        });
    });
  });
};

Promise.myAny([p1, p2, p3]).then((res) => console.log(res));
