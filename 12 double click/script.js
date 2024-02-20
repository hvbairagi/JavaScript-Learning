const blinker = document.getElementsByClassName("blinker")[0];

function doubleClickHandler(e) {
  let X = document.documentElement.clientWidth;
  X = (X-500)/2;
  const Y = document.documentElement.clientHeight;
  const x = e.clientX,
    y = e.clientY;
  console.log(X, x, x+X);
  // console.log(Y, y, Y - y);
  blinker.style.left = `${x}px`;
  blinker.style.top = `${y}px`;
  blinker.classList.add("active");
  setTimeout(() => {
    blinker.classList.remove("active");
  }, 600);
}
