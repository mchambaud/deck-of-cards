import { Component } from '@angular/core';
import { Card } from '../card/card';
import { Deck } from './deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public deck = new Deck();
  public card: Card;
  public gameOver = false;

  constructor() {
    this.deck.shuffle();
  }

  dealCard(): void {
    try {
      this.card = this.deck.dealCard();
    } catch (error) {
      console.error(error && error.message);
      this.gameOver = true;
    }
  }
}
