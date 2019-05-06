import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';


 const routes: Routes = [
   { path: 'listProduct', component: ListProductComponent },
   { path: 'addProduct', component: AddProductComponent }
  ]


@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
