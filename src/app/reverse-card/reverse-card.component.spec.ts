import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCardComponent } from './reverse-card.component';
import { CardComponent } from '../card/card.component';
import { CardRank } from '../card/card-rank.enum';

describe('ReverseCardComponent', () => {
  let component: ReverseCardComponent;
  let fixture: ComponentFixture<ReverseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseCardComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create reverse card', () => {
    expect(component).toBeTruthy();
  });

  it('should have a reverse card', () => {
    expect(component.card).not.toBeNull();
    expect(component.card.suit).toBeNull();
    expect(component.card.rank).toEqual(CardRank.Back);
  });

  it('should have rendered a reverse card', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('use').getAttribute('xlink:href')).toContain('#back');
  });

  it('should have rendered with the proper deck color', () => {
    const compiled = fixture.debugElement.nativeElement;
    const testColor = 'blue';
    component.deckColor = testColor;
    fixture.detectChanges();
    expect(compiled.querySelector('use').getAttribute('fill')).toEqual(testColor);
  });
});
