import { Constructor } from 'make-error';
import { template } from '@angular-devkit/schematics/src';
import { NgModel } from '@angular/forms/src/directives';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'sandbox',
  template: `
    <h1>Hello {{name}}</h1>
  `
})

export class SandboxComponent {
  name:string = "John Doe";

  constructor() {
    this.name = "Mahmud";
  }
}
