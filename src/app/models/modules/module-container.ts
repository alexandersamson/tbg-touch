import {KeypadModel} from './keypad/keypad-model';

export class ModuleContainer {
  id: number;
  name: string;
  modulesAvailable: {};
  modulesUsed: {};
  moduleSelected: any;

  constructor() {
    this.id = 0;
    this.name = 'default game-modules container';
    this.modulesAvailable = {'keypad': KeypadModel};
    this.modulesUsed = [this.modulesAvailable['keypad']];
    this.moduleSelected = this.modulesAvailable['keypad'];
  }
}
