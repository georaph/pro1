import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }




  loadProducts() {


    return this.http.get("http://localhost:3000/api/products")
      .map((response: Response) => {
        var myJSON1 = JSON.stringify(response);
        console.log('status is' + myJSON1);
        return response
      })



  }

  addProduct(prod) {
    console.log('request ' + JSON.stringify(prod));
    var token = sessionStorage.getItem('token');
    return this.http.post('http://localhost:3000/api/products', prod)
      .map((response: Response) => {
        console.log('registered Gymowner');
        var myJSON1 = JSON.stringify(response);
        console.log(myJSON1);
      })
  }

  getProductId(id) {

    var url = "http://localhost:3000/api/products/" + id

    return this.http.get(url)

      .map((response1: Response) => {

        var myJSON1 = JSON.stringify(response1);


        return response1
      })
  }

  updateProductid(id, data) {

    var url = "http://localhost:3000/api/products/" + id

    return this.http.put(url, data)
      .map((response: Response) => {

        console.log('updated');
        var myJSON1 = JSON.stringify(response);
        console.log(myJSON1);
      })
  }




  deleteProductid(id) {
    

    var url = "http://localhost:3000/api/products/" + id

    return this.http.delete(url)

      .map((response1: Response) => {
        return 1

      })
  }

}

