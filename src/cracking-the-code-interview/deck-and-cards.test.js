const { Deck } = require('./deck-and-cards');

describe('Deck', () => {

  it('peek does not change size of the deck', () => {
    const deck = new Deck()
    deck.peek()
    expect(deck.size()).toEqual(52)
  })

  it('pop does change the size', () => {
    const deck = new Deck()
    deck.pop()
    expect(deck.size()).toEqual(51)
  })



})
