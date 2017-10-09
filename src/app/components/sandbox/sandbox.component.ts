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
  isSpecial = true;
  canSave = true;
  currentStyles = {};

  constructor() {
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '50px' : '10px'
    }
  }
}
