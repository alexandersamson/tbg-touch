import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainOverviewComponent } from './components/main-screen/main-overview/main-overview.component';
import { GameScreenComponent } from './components/main-screen/game-screen/game-screen.component';
import { TimerComponent } from './components/main-screen/game-screen/timer/timer.component';

import { Dimensions } from './globals/dimensions';
import { ModuleContainer } from './models/modules/module-container';
import { GameTimer } from './models/timers/game-timer/game-timer';

import { TimerService } from './services/timer.service';
import { AudioService } from './services/audio.service';


@NgModule({
  declarations: [
    AppComponent,
    MainOverviewComponent,
    GameScreenComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Dimensions,
    ModuleContainer,
    GameTimer,
    TimerService,
    AudioService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
