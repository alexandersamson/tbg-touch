import { Component, OnInit } from '@angular/core';
import {Dimensions} from '../../../globals/dimensions';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.css']
})
export class MainOverviewComponent implements OnInit {

  constructor(public dimensions: Dimensions) {
    this.dimensions = new Dimensions();
  }

  ngOnInit() {
  }

}
