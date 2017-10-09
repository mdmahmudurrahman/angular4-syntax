import { Constructor } from 'make-error';
import { template } from '@angular-devkit/schematics/src';
import { NgModel } from '@angular/forms/src/directives';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'sandbox',
  template: `
    <h1>{{name}} is {{age}} years old</h1>
    <h2>My name is {{person.firstName}} {{person.lastName}}</h2>
    <p>Your age is {{showAge()}}</p>
  `
})

export class SandboxComponent {
  name = "John Doe";
  age = 35;
  person = { firstName: 'Steve', lastName: 'Smith'}

  constructor() {
    console.log('Constructor is called for Sandbox');
    // this.age = 100;
    this.hasBirthDay();
  }

  hasBirthDay() {
    this.age += 100;
  }

  showAge() {
    return this.age;
  }
}
