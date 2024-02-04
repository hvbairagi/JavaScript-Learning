// Create a virtual DOM to optimize the rendering process
const ul = document.getElementById("list");
let virtualDOM = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = i + 1;
  virtualDOM.appendChild(li);
}

ul.appendChild(virtualDOM);
