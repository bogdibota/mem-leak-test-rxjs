import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

@Injectable()
export class ObsService {

  subj = new BehaviorSubject(42);

  constructor(private http: Http) {
    setInterval(() => {
      this.subj.next(42);
    }, 100);
  }

  createFiniteObservable() {
    return Observable.create(function (obs) {
      setTimeout(() => {
        obs.next(42);
        obs.complete();
      }, 5000);
    });
  }

  createInfiniteObservable() {
    return this.subj.asObservable();
  }

  httpGetCall() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .map(it => it.json());
  }
}
