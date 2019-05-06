import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';






@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products

  constructor(private http: HttpClient) {
    alert()
   // this.loadProducts();

  }

  ngOnInit() {
    alert()
  }


  loadProducts() {

    alert()
    return this.http.get("http://localhost:3000/api/products")

     
    .map((response: Response) => {
      alert(JSON.stringify(response))
      var par = response.text();
      
      
  });
    // .map((data: any[]) => {
      //   alert(JSON.stringify(data))
      //   this.products = data;
      //   return true;
      // });
  }

}
