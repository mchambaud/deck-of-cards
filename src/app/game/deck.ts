import { Card } from '../card/card';
import { CardSuit } from '../card/card-suit.enum';
import { CardRank } from '../card/card-rank.enum';

export class Deck {
  public cards: Array<Card>;

  constructor() {
    this.cards = this.getDefaultDeck();
    this.shuffle();
  }

  /**
   * Shuffles card
   */
  public shuffle(): void {
    let currentCardPosition = this.cards.length;
    let randomPosition: number;
    let currentCard: Card;

    while (currentCardPosition !== 0) {
      randomPosition = Math.floor(Math.random() * currentCardPosition);
      currentCardPosition -= 1;

      currentCard = this.cards[currentCardPosition];
      this.cards[currentCardPosition] = this.cards[randomPosition];
      this.cards[randomPosition] = currentCard;
    }
  }

  /**
   * Returns the next card in the deck
   */
  public dealOneCard(): Card {
    if (this.cards.length === 0) {
      throw new Error('There are no more cards in your deck');
    }

    return this.cards.shift();
  }

  /**
   * Generates a deck of card with 52 playing cards
   */
  private getDefaultDeck(): Array<Card> {
    const suits = Object.keys(CardSuit);
    const ranks = Object.keys(CardRank).filter((rank) => CardRank[rank] !== CardRank.Back);
    const defaultDeck = [];

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        defaultDeck.push(new Card(CardSuit[suit], CardRank[rank]));
      });
    });

    return defaultDeck;
  }
}
