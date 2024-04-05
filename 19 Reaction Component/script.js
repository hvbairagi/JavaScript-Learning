const container = document.querySelector(".container");
const main = document.querySelector(".main");

function mouseEnter() {
  container.style.display = "flex";
}

function mouseLeave() {
  container.style.display = "none";
}

function clicked(event) {
  if (!event.target.src) return;
  main.src = event.target.src;
}
