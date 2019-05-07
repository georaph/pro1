import { Component, OnInit } from '@angular/core';

import { FirstComponentComponent } from '../first-component/first-component.component';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  //constructor(){}
  constructor(private comp: FirstComponentComponent ) {

    alert('second component')
   }

  ngOnInit() {
  }


  testSecond(){
    alert('second component')
  }

  // public callMe(): void {
  //   this.comp.testFirst();
  // }

}
