import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Med } from '../model/model';
import { ApiService } from "src/app/api/api.service";
import { Farm } from "src/app/model/farm.model";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage  { 
  // implements OnInit
   public meds: Array<Med> = new Array<Med>();
  // public farms: Array<Farm> = [];
    textCauta='';


  constructor(public router:Router, private apiService: ApiService) { 
    
    this.apiService.getAllMeds()
      .subscribe( resp=>this.meds=resp);
    
  }

  CautaMed (event) {
    const text= event.target.value;
    this.textCauta=text;
    
  }

  goBack(){
    this.router.navigate(['home'])

  }


  // ngOnInit() {
  //   this.apiService.getAllMeds().subscribe(apiMeds => {
  //     for (let med of apiMeds) {
  //        this.meds.push(new Med(med.name, med.farmacie));
  //     }
  //   });
  //  }
  }


