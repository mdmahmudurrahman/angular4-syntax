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
  greeting:string = "Angular app";
  isSpecial:boolean = false;
  show:string = "Show";
  hide:string = "Hide"

  changeGreeting() {
    this.greeting = "Angular application";
    this.isSpecial = !this.isSpecial;
  }
}
