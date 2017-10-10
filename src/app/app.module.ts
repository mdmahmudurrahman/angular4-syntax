import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { DataService } from './services/data.service';
import { EmployeeDataService } from './services/employee.data.service';

@NgModule({
  declarations: [
    AppComponent, SandboxComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DataService, EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
