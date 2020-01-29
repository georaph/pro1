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

  pid
  product
  productname
  qty

  constructor(private sharedService: SharedServiceService,
    private route: ActivatedRoute,
    private router: Router
    
  ) {this.productname='na' }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
    
      this.getProductId(id)
    });
  }

  getProductId(id) {

    var results=this.sharedService.getProductId(id);
    var par=JSON.stringify(results)
    
      this.pid = results.pid;
       this.productname = results.productname
       this.qty = results.qty
      
    
    
    
    
   


  }

  updateProductid(data) {

    var datas = {
      "pid":"",
      "productname": "",
      "qty": "",
    };
    datas.pid = this.pid
    datas.productname = this.productname
    datas.qty = this.qty

    this.sharedService.updateProductid(this.pid, datas)
      this.router.navigateByUrl('/listProduct');
    

  }


  deleteProductId(id) {
    var result=this.sharedService.deleteProductid(id)
      if(result == 1)
      this.router.navigateByUrl('/listProduct');


    });


  }

}
