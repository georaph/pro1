import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from '../product.service'




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name
  qty
  constructor(private sharedService: ProductService,

    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

  }

  addProduct(data) {

    this.sharedService.addProduct(data).subscribe(result => {
      alert('product added successfully')
      this.router.navigateByUrl('/listProduct');

    })
  }

}
