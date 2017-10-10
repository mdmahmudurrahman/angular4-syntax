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
  user = {
    name: ''
  }

  onSubmit({value, valid}) {
    if(valid) {
      alert(JSON.stringify(value));
    }
    else {
      alert(valid);
    }
  }
}
