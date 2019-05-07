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
    this.sharedService.loadProducts().subscribe(result => {

      this.products = result;
    });


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
