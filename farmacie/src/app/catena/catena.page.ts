import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catena',
  templateUrl: './catena.page.html',
  styleUrls: ['./catena.page.scss'],
})
export class CatenaPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['farmacii'])

  }
}
