circles = document.getElementsByClassName("circle");

for (let circle of circles) {
  circle.addEventListener("ondragover", addBG);
  circle.addEventListener("ondrop", drop);
  circle.addEventListener("ondragleave", removeBG);
}

function addBG(event) {
  event.preventDefault();
  event.target.classList.add("active");
}

function removeBG(event) {
  event.preventDefault();
  event.target.classList.remove("active");
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
