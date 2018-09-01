import {TimeInterval} from 'rxjs';

export class GameTimer {
  id: number;
  name: string;
  timerValue: number;
  timerStartValue: number;
  timerGoalValue: number;
  timerSpeed: number;
  direction: string;
  decimal: string;
  delimiter: string;
  state: string;
  intervalTimer: any;
  amountPerTick: number;

  constructor() {
    this.id = 0;
    this.name = 'timer';
    this.timerValue = 360;
    this.timerStartValue = 360;
    this.timerGoalValue = 0;
    this.timerSpeed = 1000;
    this.amountPerTick = 1;
    this.direction = 'down';
    this.decimal = '.';
    this.delimiter = ':';
    this.state = 'stop';
  }
}
