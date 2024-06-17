const panels = document.querySelectorAll(".panel");
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  const image = event.target;
  removeActiveClasses();
  image.classList.add("active");
});

// can be done with event delegation
// panels.forEach((panel) => {
//   panel.addEventListener("click", (event) => {
//     removeActiveClasses();
//     event.target.style.flex = 1;
//     console.log(event);
//     // panel.classList.add("active");
//     // class should be added as there can be multiple style which needs to
//     // be changed
//   });
// });

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    // panel.style.flex = 0.1;
  });
}
