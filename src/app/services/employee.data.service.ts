import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeDataService {
  employees: string[];

  constructor() {
    this.employees = ["employee1", "employee2", "employee3", "employee4", "employee5"];
  }

  getEmployees() {
    return this.employees;
  }
}
