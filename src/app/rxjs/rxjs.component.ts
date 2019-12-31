import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { of } from 'rxjs';
import { first,filter } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/from';
//import 'rxjs/add/observable/filter';
//import { MyObserver } from './MyObserver'



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
      }, 0);
      subscriber.next(14);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        for (var i = 0; i < x; i++)
          console.log('got value== ' + i);
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
      console.log('-----------' + x);
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
      console.log('-------------------------' + x);
    });



    of(420).subscribe(
      val => {
        console.log(val); //-> prints 42
      }
    );
    of(1, 2, 3, 4, 5).subscribe(
      val => {
        console.log(val);
      }
    );
   var a
    var ars=new Array()
    of(a).subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log("complete")
    );



    let numbers = [3,9,7];
     source = Observable.from(numbers).map(value => {
      return 2*value;
    })
    source.subscribe(value => {
      console.log(value);
    })


    var source = Observable.create(observer => {
      observer.next('Ram')
      observer.next('Tom')
      observer.next('Hary')
      observer.complete()
    });
     source.do(//value => console.log(value)
    )
        .map(value => value.toLowerCase())
        //.map(value => value.toLowerCase())
        //.do(value => console.log(value))
        //.do(value => console.log(value))
        .subscribe(
        //value => console.log(value),
        error => console.log(error),
        () => console.log("complete")
      );





      var  names = ['Ram', 'Tom', 'Hary', 'Hem'];
    //   Observable.from(names).filter(name => name.startsWith('H'))
    //        .subscribe(name => {
    //          console.log(name)
    //        })


    // Observable.from(names).first()
    // .subscribe(name => {
    //   console.log(name)
    // })
     
  }

  ngOnInit() {
  }

}
