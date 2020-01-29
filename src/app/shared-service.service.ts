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


    // return this.http.get("http://localhost:3000/api/products")
    //   .map((response: Response) => {
    //     var myJSON1 = JSON.stringify(response);
    //     console.log('status is' + myJSON1);
    //     return response
    //   })
    return;



  }

  addProduct(prod) {

    var myObj = JSON.parse(localStorage.getItem("user"));


    if (myObj.products == null) {

      myObj = {
        "products": [

        ]
      };
    }
    var len = myObj.products.length
    myObj.products[len] = prod

    localStorage.setItem("user", JSON.stringify(myObj));
    return 1
  }

  getProductId(id) {

    var myObj = JSON.parse(localStorage.getItem("user"));
    var x;
    var obj;
    for (var i in myObj.products) {
      if (myObj.products[i].pid == id) {

        obj = myObj.products[i]
      }

    }

    return obj


  }

  updateProductid(id, data) {
    var myObj = JSON.parse(localStorage.getItem("user"));
    var x;
    var obj;
    for (var i in myObj.products) {
      if (myObj.products[i].pid == id) {


        myObj.products[i] = data
      }

    }
    localStorage.setItem("user", JSON.stringify(myObj));


  }




  deleteProductid(id) {

    var myObj = JSON.parse(localStorage.getItem("user"));
    var x;
    for (var i in myObj.products) {
      if (myObj.products[i].pid == id)
        myObj.products.splice(i, 1);

    }
    localStorage.setItem("user", JSON.stringify(myObj));
    return 1



  }

}

