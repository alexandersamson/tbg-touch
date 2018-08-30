import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainOverviewComponent } from './components/main-screen/main-overview/main-overview.component';
import { GameScreenComponent } from './components/main-screen/game-screen/game-screen.component';

import { Dimensions } from './globals/dimensions';


@NgModule({
  declarations: [
    AppComponent,
    MainOverviewComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Dimensions],
  bootstrap: [AppComponent]
})
export class AppModule { }
