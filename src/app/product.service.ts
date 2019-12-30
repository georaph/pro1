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


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private _producturl = './product.json';
  constructor(private _http: HttpClient) { }

  getproducts_old() {
    //alert('hello')
    return this._http.get(this._producturl)
      .map((response: Response) => {

        var myJSON1 = JSON.stringify(response);
        console.log('status is' + myJSON1);
        return response
      })

    //return this._http.get(this._producturl).pipe( map((data) => <IProduct[]>data),
    //tap(data => console.log(JSON.stringify(data)));
  }
  getproducts(): Observable<IProduct[]> {
    return this._http.get(this._producturl).pipe(
      map((data) => <IProduct[]>data),
      tap(data => console.log(JSON.stringify(data))));
  }

}

