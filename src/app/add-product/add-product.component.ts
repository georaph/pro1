import { Component, OnInit } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import {SharedServiceService} from '../shared-service.service'




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private sharedService :SharedServiceService)
    
  { }

  ngOnInit() {
  }

  addProduct(data){

    this.sharedService.addProduct(data).subscribe(result => {
      alert('product added successfully')
      //this.router.navigateByUrl('/adminhome');
    })
  }

}
