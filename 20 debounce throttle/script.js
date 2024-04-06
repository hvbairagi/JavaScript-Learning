function getData() {
  console.log("Fetching data...");
}

function debounce(fn, limit) {
  let timer;
  let context = this,
    args = arguments;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), limit);
  };
}

const debounceGetData = debounce(getData, 300);

function throttle(fn, limit) {
  let timerStarted = false;
  let context = this,
    args = arguments;
  return function () {
    if (timerStarted) return;
    timerStarted = true;
    setTimeout(() => {
      fn.apply(context, args);
      timerStarted = false;
    }, limit);
  };
}

const throttleGetData = throttle(getData, 250);
