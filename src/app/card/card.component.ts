import { Component, Input } from '@angular/core';
import { Card } from './card';
import { CardRank } from './card-rank.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  public card: Card;

  @Input()
  public deckColor = 'red';

  constructor() {
  }

  private getFillColor(): string {
    return this.card && this.card.rank === CardRank.Back ?
      this.deckColor :
      'inherit';
  }
}
