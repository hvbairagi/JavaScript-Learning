const blinker = document.getElementsByClassName("blinker")[0];

function doubleClickHandler(e) {
  const x = e.clientX - e.target.offsetLeft,
    y = e.clientY - e.target.offsetTop;
  blinker.style.left = `${x-8}px`;
  blinker.style.top = `${y-8}px`;
  blinker.classList.add("active");
  setTimeout(() => {
    blinker.classList.remove("active");
  }, 600);
}
