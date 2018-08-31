import { ModuleMetadata } from '../module-metadata';
import { ModuleStandards } from '../module-standards';
import { KeypadKey } from './keypad-key';

export class KeypadModel {
  metadata: ModuleMetadata;
  standards: ModuleStandards;
  displayDefaultText: String;
  displayTypedChars: String;
  displayShowCode: boolean;
  keys: KeypadKey[];
  keyCols: number;
  validCode: string;
  maxCodeLength: number;
  minCodeLength: number;



  constructor() {
    this.metadata.id = 0;
    this.metadata.name = 'Keypad module';
    this.metadata.description = 'Standard digital keypad defusal module';
    this.metadata.group = 'game_module';
    this.metadata.type = 'keypad';
    this.metadata.title = 'Keypad';
    this.metadata.author = 'GM7 - Alexander Samson - 2018';
    this.metadata.issueDate = 0;

    this.standards.actionRetriesReached = 'time_penalty';
    this.standards.retriesMax = 3;
    this.standards.retriesUsed = 0;
    this.standards.actionInvalidTry = 'none';
    this.standards.actionValid = 'module_valid';
    this.standards.invalidTryDelay = 0;
    this.standards.retriesReachedDelay = 0;
    this.standards.enabled = true;
    this.standards.isValidated = false;
    this.standards.allowInteraction = true;
    this.standards.disableDelay = 0;
    this.standards.enableDelay = 0;
    this.standards.retriesReachedEnd = 0;
  }
}
