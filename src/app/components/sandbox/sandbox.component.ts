import { template } from '@angular-devkit/schematics/src';
import { NgModel } from '@angular/forms/src/directives';
import { Component, NgModule } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
  styleUrls: ['sandbox.component.css']
})

export class SandboxComponent {
  customer:Customer;
  customers:Customer[];
  
  constructor() {
    this.customer = {
      id: 1,
      name: "John Doe",
      email: "test@test.com"
    }

    this.customers = [
      {
        id: 2,
        name: "John Doe2",
        email: "test@test.com"
      },
      {
        id: 3,
        name: "John Do3",
        email: "test@test.com"
      },
      {
        id: 4,
        name: "John Doe4",
        email: "test@test.com"
      }
    ]
  }
}
