// Deck of Cards: Design the data structures for a generic deck of cards. Explain how you would
// subclass the data structures to implement blackjack.

const { shuffle } = require('../datastructures-and-classical-algorithms/shuffle');

const suits = Object.freeze(['DIAMOND', 'HEART', 'CLUBS', 'SPADES'])
const ranks = Object.freeze(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'])


class Card {
  constructor(suit, rank) {
    this.suit = suit
    this.rank = rank
  }
}

class Deck {
  constructor() {
    this.cards = []
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < suits.length; j++) {
        this.cards.push(new Card(suits[j], ranks[j]))
      }
    }
  }

  shuffleRemaining() {
    this.cards = shuffle(this.cards)
  }

  pop() {
    return this.cards.pop()
  }

  size() {
    return this.cards.length
  }

  peek() {
    return this.cards[this.cards.length - 1]
  }
}

module.exports.Card = Card
module.exports.Deck = Deck
