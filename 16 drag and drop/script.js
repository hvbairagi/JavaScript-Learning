circles = Array.from(
  // This below statement return an HTMLCollection.
  // This is an array like object.
  // HTMLCollection is live which means any change will also be
  // updated in the HTMLCollection.
  document.getElementsByClassName("circle")
);

circles.forEach((circle) => {
  circle.addEventListener("dragenter", addBG);
  circle.addEventListener("dragleave", removeBG);
  circle.addEventListener("drop", drop);
  circle.addEventListener("dragover", dragOver);
});

function drag(event) {
  // console.log("drag");
  event.dataTransfer.setData("text", event.target.id);
}

function addBG(event) {
  // console.log("addBG");
  event.preventDefault();
  event.target.classList.add("active");
}

function removeBG(event) {
  // console.log("removeBG");
  event.preventDefault();
  circles.forEach((c) => c.classList.remove("active"));
}

function drop(event) {
  // console.log("drop");
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function dragOver(event) {
  /**
   * Using event.preventDefault() on the dragover event is necessary
   * to enable the drop event to occur.
   * By default, browsers do not allow dropping elements onto
   * other elements. When you drag an element over another element,
   * the browser's default behavior is to not allow dropping.
   * It prevents the drop from happening because it's considered
   * a potential security risk for certain types of content.
   */
  event.preventDefault();
}
