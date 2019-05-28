import { Component } from '@angular/core';



//import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Observable } from 'rxjs/Observable';




import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import {SharedServiceService} from './shared-service.service'
//import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro1';
  products


  constructor(private sharedService :SharedServiceService,
    private route: ActivatedRoute,
    private router: Router ,
  ){
    this.getProducts()

  }
  getProducts() {
    this.sharedService.loadProducts().subscribe(result => {
     // alert(JSON.stringify(result))
     // console.log('logs' + result[0].gym_name)
      this.products = result;
    });
  }
}
