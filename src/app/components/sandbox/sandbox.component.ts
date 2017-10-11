import { template } from '@angular-devkit/schematics/src';
import { NgModel } from '@angular/forms/src/directives';
import { Component, NgModule } from '@angular/core';

import { Customer } from './Customer';
import { DataService } from '../../services/data.service';
import { EmployeeDataService } from '../../services/employee.data.service';

@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
  styleUrls: ['sandbox.component.css']
})

export class SandboxComponent {
  data:any[] = [];

  constructor(public dataService:DataService) {
    this.dataService.getData().subscribe((data) => {
      this.data.push(data);
    });
  }
}
