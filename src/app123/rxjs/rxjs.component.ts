import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { 

    const observable = new Observable(subscriber => {
      subscriber.next(2);
      subscriber.next(20);
      subscriber.next(3);
      subscriber.next(4);
      setTimeout(() => {
        subscriber.next(5);
        subscriber.complete();
      }, 1000);
      subscriber.next(14);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        for(var i=0;i<x;i++)
        console.log('got value ' + i); 
      },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');




    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
    });
     
    foo.subscribe(x => {
      console.log(x);
    });
    // foo.subscribe(y => {
    //   console.log(y);
    // });

    const obs = ajax('http://localhost:3000/employees').pipe(
      map(userResponse => console.log('users: ',
      JSON.stringify(
      userResponse))),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );


    obs.subscribe(x => {
      console.log('-------------------------'+x);
    });

    

    of(420).subscribe(
val => {
console.log(val); //-> prints 42
}
);
    of(1, 2, 3, 4, 5).subscribe (
      val => {
      console.log(val);
      }
      );
    
    


  }

  ngOnInit() {
  }

}
