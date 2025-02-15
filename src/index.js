const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

function toggleCards(card) {
  card.children[0].classList.toggle("back");
  card.children[0].classList.toggle("front");
  card.children[1].classList.toggle("back");
  card.children[1].classList.toggle("front");
}
window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat" ></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  function togglebehaviour() {}
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (memoryGame.pickedCards.length !== 2) {
        memoryGame.pickedCards.push(card);
        toggleCards(card);
      }
      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
        setTimeout(function () {
          if (!memoryGame.checkIfPair(card1, card2)) {
            memoryGame.pickedCards.forEach((item) => toggleCards(item));
          }
          memoryGame.pickedCards = [];
          document.getElementById("pairs-clicked").innerHTML =
            memoryGame.pairsClicked;
          document.getElementById("pairs-guessed").innerHTML =
            memoryGame.pairsGuessed;
        }, 1000);
      }
    });
  });
});
