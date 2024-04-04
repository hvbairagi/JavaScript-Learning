const race = function (promisesArray) {
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


Promise.myAll([p1])