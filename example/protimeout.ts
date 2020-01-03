import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IProduct } from './product';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { map ,tap} from 'rxjs/operators';

import 'rxjs/add/operator/catch';



let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('output')
      }, 1000)
    });
    let source = Observable.fromPromise(promise);
    source.subscribe(data => {
      console.log(data);
    })
