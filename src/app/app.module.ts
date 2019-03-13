import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { RabbitCardComponent } from './components/rabbit-card/rabbit-card.component';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimalsListPageComponent } from './page/animals-list-page/animals-list-page.component';
import { TestPageComponent } from './page/test-page/test-page.component';
import { DogListPageComponent } from './page/dog/dog-list-page/dog-list-page.component';
import { CatListPageComponent } from './page/cat/cat-list-page/cat-list-page.component';
import { RabbitListPageComponent } from './page/rabbit/rabbit-list-page/rabbit-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DogCardComponent,
    RabbitCardComponent,
    CatCardComponent,
    AnimalsListPageComponent,
    TestPageComponent,
    DogListPageComponent,
    CatListPageComponent,
    RabbitListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
