//WAR CARD GAME
//cards
class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
    describeCard() {
      return `${this.value} of ${this.suit}`;
    }
  }
  //deck,shuffle,deal
  class Deck {
    constructor() {
      this.cards = [];
    }
    createDeck() {
      let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
      for (let suit of suits) {
        for (let value = 2; value <= 14; value++) {
          this.cards.push(new Card(value, suit));
        }
      }
    }
    shuffleDeck() {
      this.cards.sort(() => Math.random() - 0.5);
    }
    deal() {
      return this.cards.splice(0, 26); // Returns 26 cards for a player
    }
  }
  //players
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
    playCard() {
      return this.hand.shift(); // Removes and returns the top card
    }
    addPoint() {
      this.score++;
    }
  }
  
  // Starting the game
let deck = new Deck();
deck.createDeck();
deck.shuffleDeck();

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

player1.hand = deck.deal();
player2.hand = deck.deal();

// Play the game
for (let i = 0; i < 26; i++) {
  let card1 = player1.playCard();
  let card2 = player2.playCard();
  console.log(`Round ${i + 1}:`);
  console.log(`${player1.name} plays ${card1.describeCard()}`);
  console.log(`${player2.name} plays ${card2.describeCard()}`);
//whos winning the rounds
  if (card1.value > card2.value) {
    player1.addPoint();
    console.log(`${player1.name} wins this round!`);
  } else if (card1.value < card2.value) {
    player2.addPoint();
    console.log(`${player2.name} wins this round!`);
  } else {
    console.log("It's a tie!");
  }
  console.log("");
}

// Final Scores
console.log(`${player1.name} Score: ${player1.score}`);
console.log(`${player2.name} Score: ${player2.score}`);

// Who will when
if (player1.score > player2.score) {
  console.log(`${player1.name} wins the game!`);
} else if (player1.score < player2.score) {
  console.log(`${player2.name} wins the game!`);
} else {
  console.log("The game is a tie!");
}
