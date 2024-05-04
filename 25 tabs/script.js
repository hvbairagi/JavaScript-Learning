const container = document.querySelector(".container");
const tabsContainer = document.querySelector(".tabs-container");
const selectedTab = document.querySelector(".selected-tab");
const colors = ["red", "green", "blue", "aqua", "aquamarine"];
let counter = 0;

function add() {
  const tab = document.createElement("div");
  tab.style.height = "2.5rem";
  tab.style.width = "3rem";
  tab.style.marginLeft = "5px";
  tab.id = counter++;
  tab.textContent = `tab ${counter}`;
  const color = Math.floor(Math.random() * 5);
  tab.style.backgroundColor = colors[color];
  container.appendChild(tab);
}

function deleteTab(event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName === "BUTTON") return;
  container.removeChild(event.target);
  selectedTab.style.backgroundColor = "white";
}

function show(event) {
  const color = event.target.style.backgroundColor;
  selectedTab.style.backgroundColor = color;
}
