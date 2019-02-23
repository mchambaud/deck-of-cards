import { Deck } from './deck';

describe('Deck', () => {
  it('should create a deck', () => {
    const deck = new Deck();

    expect(deck).toBeTruthy();
  });

  it('should have 52 cards', () => {
    const deck = new Deck();

    expect(deck.cards.length).toEqual(52);
  });

  it('should shuffle cards', () => {
    const deck = new Deck();

    const randomIndex = Math.floor(Math.random() * Math.floor(51));
    const valueAtIndex = deck.cards[randomIndex];

    expect(deck.cards[randomIndex]).toEqual(valueAtIndex);

    deck.shuffle();

    expect(deck.cards[randomIndex]).not.toEqual(valueAtIndex);
  });

  it('should deal a card', () => {
    const deck = new Deck();

    expect(deck.cards.length).toEqual(52);

    deck.dealOneCard();

    expect(deck.cards.length).toEqual(51);
  });

  it('should not over deal cards', () => {
    const deck = new Deck();

    expect(deck.cards.length).toEqual(52);

    for (let idx = 0; idx < 52; idx++) {
      deck.dealOneCard();
    }

    expect(deck.cards.length).toEqual(0);
    expect(deck.dealOneCard).toThrowError();
  });
});
