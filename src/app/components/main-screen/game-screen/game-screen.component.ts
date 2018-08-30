import { Component, OnInit } from '@angular/core';
import {Dimensions} from '../../../globals/dimensions';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  constructor(public dimensions: Dimensions) {
    this.dimensions = new Dimensions();
  }

  ngOnInit() {
  }

}
