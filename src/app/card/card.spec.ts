import { Card } from './card';
import { CardSuit } from './card-suit.enum';
import { CardRank } from './card-rank.enum';

describe('Card', () => {
  it('should create an instance', () => {
    const card = new Card(CardSuit.Club, CardRank.Three);
    expect(card).toBeTruthy();
  });

  it('should have a proper name', () => {
    const card = new Card(CardSuit.Club, CardRank.Three);
    expect(card.name).toEqual(`${CardSuit.Club}_${CardRank.Three}`);
  });

  it('should have a proper name for back card', () => {
    const card = new Card(null, CardRank.Back);
    expect(card.name).toEqual(CardRank.Back);
  });
});
