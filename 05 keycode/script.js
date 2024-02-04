const p = document.getElementById("keyCode");

document.addEventListener("keyup", (e) => {
  e.preventDefault();
  let key = e.key,
    code = e.code;
  if (key === " ") {
    key = "Space";
  }
  p.innerText = `Key: ${key} | Code: ${code}`;
  // deleteExistingAudio();
  makeSound(key);
});

function makeSound(key) {
  // key = key.toLowerCase();
  key = key.toUpperCase();
  // sound = new Audio(`sounds/${key}.mp3`);
  sound = new Audio(`audio/${key}.wav`);
  // sound.play();
  sound.play();
}
