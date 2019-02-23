import { CardSuit } from './card-suit.enum';
import { CardRank } from './card-rank.enum';

export class Card {
  public suit: CardSuit;
  public rank: CardRank;
  public name: string;

  constructor(suit: CardSuit, rank: CardRank) {
    this.suit = suit;
    this.rank = rank;
    this.name = rank === CardRank.Back ? rank : `${suit}_${rank}`;
  }
}


