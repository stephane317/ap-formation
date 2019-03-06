import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { RabbitCardComponent } from './components/rabbit-card/rabbit-card.component';
import { CatCardComponent } from './components/cat-card/cat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,
    RabbitCardComponent,
    CatCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
