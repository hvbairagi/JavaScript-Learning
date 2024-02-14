const button = document.getElementById("button");
const body = document.body;
const toggle = document.getElementById("checkbox");

button.addEventListener("click", () => toggleTheme());

toggle.addEventListener("click", () => {
  toggleTheme();
});

function toggleTheme() {
  light = body.classList.contains("light");
  if (light) {
    body.classList.remove("light");
    body.classList.add("dark");
    button.innerText = "Light";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    button.innerText = "Dark";
  }
}
