import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) {

  }

  btnClicked(){
    console.log('button was clicked')
    this.router.navigate(['lista'])
    
  }

  btnClicked1(){
    console.log('button was clicked')
    this.router.navigate(['farmacii'])
  }
}
