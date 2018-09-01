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
  tickSoundModulo: number;    // assesses like 'timerValue % tickSoundModulo === 0'
  tickSoundFile: string;

  constructor() {
    this.id = 0;
    this.name = 'timer';
    this.timerValue = 36000;
    this.timerStartValue = 36000;
    this.timerGoalValue = 0;
    this.timerSpeed = 100;
    this.amountPerTick = 1;
    this.direction = 'down';
    this.decimal = '.';
    this.delimiter = ':';
    this.state = 'stop';
    this.tickSoundModulo = 10;  // 10 = every second. 100 = every 10 seconds. 1 = every 1/10th second
    this.tickSoundFile = 'clocktick.wav';
  }
}
