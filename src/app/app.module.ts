import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GameComponent } from './game/game.component';
import { ReverseCardComponent } from './reverse-card/reverse-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameComponent,
    ReverseCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
