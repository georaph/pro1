import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Router, ActivatedRoute } from '@angular/router';

import { SharedServiceService } from '../shared-service.service'






@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  title = 'pro1';
  products

  constructor(private sharedService: SharedServiceService,
    private route: ActivatedRoute,
    private router: Router) {

    this.getProducts()

  }



  getProducts() {
    var arr=new Array();
    // var myObj={
    //   "cars":[]
    // };

     var myObj=JSON.parse(localStorage.getItem("user"));
    var x;
    for (var i in myObj.products) {
      console.log( 'pid is '+myObj.products[i].pid)
    } 
    this.products =myObj.products;

    //let item = JSON.parse(localStorage.getItem("user"));
    // arr=localStorage.getItem("user")
    // item.forEach(element => {
    //   console.log('ff')
    // });
    //alert('x')
    //var prod=localStorage.getItem("user");
   // var obj=JSON.parse(prod)
    //var obj=JSON.parse(prod)
    // alert('pid'+JSON.parse(prod).pid)
    // alert('name'+JSON.parse(prod).productname)
    // alert('qty'+JSON.parse(prod).qty)
    // // this.sharedService.loadProducts().subscribe(result => {

    //    this.products = JSON.parse(prod);
    // });


  }

  edit(id) {

    this.router.navigateByUrl('/editProduct/' + id);

  }

  delete(id) {

  
    this.sharedService.deleteProductid(id).subscribe(result => {

      if (result == 1) alert('deleted')
      this.router.navigateByUrl('/addProduct');

    });


  }

}
