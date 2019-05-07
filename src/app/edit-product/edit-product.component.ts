import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Router, ActivatedRoute } from '@angular/router';

import { SharedServiceService } from '../shared-service.service'



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id
  product
  productname
  qty

  constructor(private sharedService: SharedServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
    
      this.getProductId(id)
    });
  }

  getProductId(id) {
    this.sharedService.getProductId(id).subscribe(result => {

      this.id = result.id;
      this.productname = result.productname
      this.qty = result.qty
    });


  }

  updateProductid(data) {

    var datas = {
      "productname": "",
      "qty": "",
    };
    datas.productname = this.productname
    datas.qty = this.qty

    this.sharedService.updateProductid(this.id, datas).subscribe(result => {
      alert('updated')
      this.router.navigateByUrl('/listProduct');
    });

  }


  deleteProductId(id) {
    this.sharedService.deleteProductid(id).subscribe(result => {
      if (result == 1) alert('deleted')
      this.router.navigateByUrl('/listProduct');


    });


  }

}
