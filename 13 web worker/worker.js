onmessage = (e) => {
  console.log('worker.js: ', e.data)
  let start = performance.now();
  sum = 0;
  for (let i = 0; i < 200000000; i++) sum += i;
  let end = performance.now();
  const time = ((end - start) / 1000).toFixed(2) + "s";
  postMessage(time);
};
