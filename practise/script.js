const images = document.querySelectorAll(".image");
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  const image = event.target;
  makeAllInactive();
  image.classList.add("active");
});

function makeAllInactive() {
  images.forEach((i) => i.classList.remove("active"));
}
