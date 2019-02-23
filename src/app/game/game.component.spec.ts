import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { ReverseCardComponent } from '../reverse-card/reverse-card.component';
import { CardComponent } from '../card/card.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent,
        ReverseCardComponent,
        CardComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a deck of card', () => {
    expect(component.deck).not.toBeNull();
  });

  it('should have cards', () => {
    expect(component.deck.cards).not.toBeNull();
    expect(component.deck.cards.length).toEqual(52);
  });

  it('should be able to deal card', () => {
    expect(component.card).not.toBeDefined();
    component.dealCard();
    fixture.detectChanges();

    expect(component.card).not.toBeNull();

  });

  it('should be end game when deck is empty', () => {
    for (let idx = 0; idx < 53; idx++) {
      component.dealCard();
    }

    fixture.detectChanges();

    expect(component.card).not.toBeNull();
    expect(component.gameOver).toBeTruthy();
    expect(component.message).toBeDefined();
  });

  it('should display error message when out of cards', () => {
    const compiled = fixture.debugElement.nativeElement;

    for (let idx = 0; idx < 53; idx++) {
      component.dealCard();
    }

    fixture.detectChanges();

    expect(compiled.querySelector('p').textContent).toContain('no more cards');
  });

  it('should display play again button message when gave over', () => {
    const compiled = fixture.debugElement.nativeElement;

    for (let idx = 0; idx < 53; idx++) {
      component.dealCard();
    }

    fixture.detectChanges();

    expect(compiled.querySelector('button')).not.toBeNull();
  });

  it('should restart game on play again', () => {
    for (let idx = 0; idx < 53; idx++) {
      component.dealCard();
    }

    fixture.detectChanges();

    expect(component.card).not.toBeNull();
    expect(component.gameOver).toBeTruthy();
    expect(component.message).toBeDefined();

    component.playAgain();

    expect(component.deck).toBeDefined();
    expect(component.deck.cards.length).toEqual(52);
    expect(component.card).not.toBeDefined();
    expect(component.gameOver).toBeFalsy();
    expect(component.message).not.toBeDefined();
  });
});
