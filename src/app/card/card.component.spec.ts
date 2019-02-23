import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CardSuit } from './card-suit.enum';
import { CardRank } from './card-rank.enum';
import { Card } from './card';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const testCard = new Card(CardSuit.Heart, CardRank.King);
  const testReverseCard = new Card(null, CardRank.Back);
  const testColor = 'pink';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create card', () => {
    expect(component).toBeTruthy();
  });

  it('should not display a card by default', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('svg')).toBeNull();
  });

  it('should display a card', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.card = testCard;
    fixture.detectChanges();
    expect(compiled.querySelector('svg')).not.toBeNull();
    expect(compiled.querySelector('use').getAttribute('xlink:href')).toContain(`#${testCard.name}`);
  });

  it('should have a default deck color', () => {
    expect(component.deckColor).toBeDefined();
  });

  it('should be able to change deck color', () => {
    component.deckColor = testColor;
    fixture.detectChanges();
    expect(component.deckColor).toEqual(testColor);
  });

  it('should not fill color for a non-reverse card', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.card = testCard;
    component.deckColor = testColor;
    fixture.detectChanges();
    expect(component.deckColor).toEqual(testColor);
    expect(compiled.querySelector('use').getAttribute('fill')).not.toEqual(testColor);
  });

  it('should fill color for a reverse card', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.card = testReverseCard;
    component.deckColor = testColor;
    fixture.detectChanges();
    expect(component.deckColor).toEqual(testColor);
    expect(compiled.querySelector('use').getAttribute('fill')).toEqual(testColor);
  });
});
