import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { ListProductComponent } from './list-product/list-product.component';
import { BrowserModule } from '@angular/platform-browser';

import { EditProductComponent } from './edit-product/edit-product.component';

import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
 { path: 'addProduct', component: AddProductComponent },
 { path: 'editProduct/:id', component: EditProductComponent },
  { path: 'listProduct', component: ListProductComponent }
];

@NgModule({
   declarations: [
     ListProductComponent, AddProductComponent
   ],
  imports: [RouterModule.forRoot(routes),
    FormsModule,BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
