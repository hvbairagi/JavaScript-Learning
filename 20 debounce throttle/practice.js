function getData() {
  console.log("Fetching data...");
}

function debounce(fn, limit) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(), limit);
  };
}

const debounceGetData = debounce(getData, 300);

function throttle(fn, limit) {
  let timerStarted = false;
  return function () {
    if (timerStarted) return;
    timerStarted = true;
    setTimeout(() => {
      fn();
      timerStarted = false;
    }, limit);
  };
}

const throttleGetData = throttle(getData, 250);
