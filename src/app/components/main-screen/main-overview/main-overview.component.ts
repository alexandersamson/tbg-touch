import { Component, OnInit } from '@angular/core';
import {Dimensions} from '../../../globals/dimensions';
import {ModuleContainer} from '../../../models/modules/module-container';

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.css']
})
export class MainOverviewComponent implements OnInit {

  constructor(public dimensions: Dimensions, public moduleContainer: ModuleContainer) {
    this.dimensions = new Dimensions();
    this.moduleContainer = new ModuleContainer();
  }

  ngOnInit() {
    console.log(this.moduleContainer.moduleSelected);
  }

}
