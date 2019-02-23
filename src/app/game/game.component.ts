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
  public message: string;

  constructor() {
  }

  dealCard(): void {
    try {
      this.card = this.deck.dealOneCard();
    } catch (error) {
      this.message = error && error.message;
      this.gameOver = true;
    }
  }

  playAgain(): void {
    this.deck = new Deck();

    this.gameOver = false;
    delete this.card;
    delete this.message;
  }
}
