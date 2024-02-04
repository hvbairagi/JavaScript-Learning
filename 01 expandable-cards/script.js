const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    removeActiveClasses();
    event.target.style.flex = 1;
    console.log(event);
    // panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    // panel.classList.remove("active");
    panel.style.flex = 0.1;
  });
}
