import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from '../model/farm.model';
import { ApiService } from "src/app/api/api.service";
import { Med } from "src/app/model/med.model";

@Component({
  selector: 'app-farmacii',
  templateUrl: './farmacii.page.html',
  styleUrls: ['./farmacii.page.scss'],
})
export class FarmaciiPage implements  OnInit {
  public farms: Array<Farm> = new Array<Farm>();
  //new Array<Farm>()
  public products: Array<Med> = [];

  //constructor(public router:Router) 
 // {
    // this.farms.push(new Farm("Catena", "Republicii", 21));
    // this.farms.push(new Farm("Sensi Blue", "Lunga", 15));
    // this.farms.push(new Farm("Help Net", "Avram Iancu", 2));
   
    constructor(private apiService: ApiService, public router:Router) {
      // this.farms.push(new Farm("Catena", "Republicii"));
      // this.farms.push(new Farm("Sensi Blue", "Lunga"));
      // this.farms.push(new Farm("Help Net", "Avram Iancu"));
      // this.farms.push(new Farm("euuuu", "Avram dd"));
   }

  
  goBack(){
    this.router.navigate(['home'])
  }

  
  goDetails(){
    this.router.navigate(['catena'])
  }
  
  goMap(){
    this.router.navigate(['map'])
  }

//aici trebuie sa fac ceva !
  ngOnInit() {
    this.apiService.getAllFarms().subscribe(apiFarms => {
      for (let farm of apiFarms) {
        this.farms.push(new Farm(farm.name, farm.strada));
      }
    });
  }

}
