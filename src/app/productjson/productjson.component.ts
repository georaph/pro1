import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service'

@Component({
  selector: 'app-productjson',
  templateUrl: './productjson.component.html',
  styleUrls: ['./productjson.component.css']
})
export class ProductjsonComponent implements OnInit {


  products

  constructor(private productService: ProductService) { 

    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts()  {
    this.productService.getproducts().subscribe(result => {
      this.products=result
   
    })

    
    
    }
    
  }

}
