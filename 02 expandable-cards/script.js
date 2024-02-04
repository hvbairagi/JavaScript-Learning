const cards = document.getElementsByClassName("card");
const cardsArray = Array.from(cards);
cardsArray.forEach((card) => {
  card.addEventListener("click", (event) => {
    collapseOthers();
    event.target.style.flex = 1;
  });
});

function collapseOthers() {
  cardsArray.forEach((card) => {
    console.log(card);
    card.style.flex = 0.1;
  });
}
