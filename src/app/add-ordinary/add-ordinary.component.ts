import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ordinary',
  templateUrl: './add-ordinary.component.html',
  styleUrls: ['./add-ordinary.component.css']
})
export class AddOrdinaryComponent implements OnInit {
  
  ProductID
  ProductName
  ars=Array();
  myobj;

  constructor() { }

  ngOnInit() {
    localStorage.clear();
  }

  add1(){
    var key;

    if (localStorage.length > 0) {
      alert('length'+localStorage.length)
      var i=localStorage.length;
      key = localStorage.key(i-1);
      alert('key'+key)
      key=parseInt(key)+1;
      alert('====='+key)
      let myObj = { id: this.ProductID, name: this.ProductName };
      localStorage.setItem(key.toString(),JSON.stringify(myObj));
      
      
      
      // We have items
    } else if(localStorage.length == 0){
      // No items
       key = 0;
       alert('---------------'+key)
       let myObj = { id: this.ProductID, name: this.ProductName };
       localStorage.setItem(key.toString(),JSON.stringify(myObj));
       alert('====='+key)
    }
    else {
    
    let myObj = { id: this.ProductID, name: this.ProductName };
    localStorage.setItem(key,JSON.stringify(myObj));
    alert('====='+key)
    }
    //this.ars.push(this.ProductID)
   //lert()
    //alert(this.ProductID)
  }

  add(){
    var key;

    
      this.myobj = { id: this.ProductID, name: this.ProductName };
      this.ars.push (this.myobj)
      localStorage.setItem("store",JSON.stringify(this.ars));
      
      
      
    
  }
  list(){

    var value = localStorage.getItem("store");
   // var v=JSON.parse(value)
  //  alert(v)
  for (let val of value) {
    alert(val);
 }
    //alert(value)
  }


}
