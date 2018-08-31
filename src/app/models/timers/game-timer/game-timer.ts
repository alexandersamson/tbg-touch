import {TimeInterval} from 'rxjs';

export class GameTimer {
  id: number;
  name: string;
  timerValue: number;
  timerSetValue: number;
  timerSpeed: number;
  direction: string;
  decimal: string;
  delimiter: string;
  state: string;
  intervalTimer: any;

  constructor() {
    this.id = 0;
    this.name = 'timer';
    this.timerValue = 36000;
    this.timerSetValue = 36000;
    this.timerSpeed = 100;
    this.direction = 'down';
    this.decimal = '.';
    this.delimiter = ':';
    this.state = 'stop';
  }
}
