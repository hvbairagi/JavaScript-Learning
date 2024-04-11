const observer = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.querySelector(".parent");

observer.observe(parent, {
  // childList: true,
  attributes: true, // Listens for attribute changes
  attributeOldValue: true,
  attributeFilter: ["title"],
});
parent.children[0].remove();

const div = document.createElement("div");
div.classList.add("child");
div.innerText = "Child 4";
// parent.appendChild(div); -> gives an array of MutationRecord
// as both the changes are rendered simultaneously

setTimeout(() => {
  parent.appendChild(div); // will give individual MutationRecords
  // as the above change takes some time to render.

  // event type is 'childList'
}, 100);

parent.id = "New id"; // event type is 'attributes'

observer.observe(
  parent, // checking on all descendent nodes with 'subtree: true'
  // parent.children[0].childNodes[0], // as text is the childNode
  // of div so observing the childNodes
  {
    subtree: true, // observer all child nodes
    characterData: true, // event type is 'characterData'
    characterDataOldValue: true,
  }
);
