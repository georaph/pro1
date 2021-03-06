import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';

import { AppRoutingModule } from './app-routing.module';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

   
   


@NgModule({
  declarations: [
    AppComponent,
    EditProductComponent,
    FirstComponentComponent,
    SecondComponentComponent,

  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
