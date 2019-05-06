import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Observable } from 'rxjs/Observable';




import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }




  loadProducts() {
    alert('ddd')

    return this.http.get("http://localhost:3000/api/products")
      .map((response: Response) => {
        var myJSON1 = JSON.stringify(response);
        console.log('status is' + myJSON1);
        return response
      })



    //   .map((response: Response) => {
    //     alert(JSON.stringify(response))
    //     var par = response.text();


    // });
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

}

