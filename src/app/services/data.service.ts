import { setTimeout } from 'timers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {
  data: Observable<any>;

  constructor() {

  }

  getData() {
    this.data = new Observable(observar => {
      setTimeout(() => {
        observar.next(1);
      }, 1000);

      setTimeout(() => {
        observar.next(2);
      }, 2000);

      setTimeout(() => {
        observar.next(3);
      }, 3000);

      setTimeout(() => {
        observar.next(4);
      }, 4000);

      setTimeout(() => {
        observar.next("Hello");
      }, 5000);

      setTimeout(() => {
        observar.complete();
      }, 6000);
    });
    return this.data;
  }
}
