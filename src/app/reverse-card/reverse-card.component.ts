import { Component, Input } from '@angular/core';
import { CardRank } from '../card/card-rank.enum';
import { Card } from '../card/card';

@Component({
  selector: 'app-reverse-card',
  templateUrl: './reverse-card.component.html'
})
export class ReverseCardComponent {
  @Input()
  public card = new Card(null, CardRank.Back);

  @Input()
  public deckColor = 'red';
}
