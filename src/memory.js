class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards !== undefined) {
      let scratch = [...this.cards];
      let range = scratch.length;
      let result = [];
      while (range > 0) {
        let roll = Math.floor(Math.random() * range);
        result.push(scratch[roll]);

        scratch = [...scratch].filter((item) => item !== scratch[roll]);

        range--;
      }

      this.cards = result;
    } else {
      console.log("error");
      return undefined;
    }
  }

  checkIfPair(card1, card2) {
    console.log(this.pairsClicked);
    // ... write your code here
    this.pairsClicked++;
    console.log(this.pairsClicked);
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}
