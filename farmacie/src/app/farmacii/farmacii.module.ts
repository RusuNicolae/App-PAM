import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";
import { ApiModule } from "src/app/api/api.module";

import { IonicModule } from '@ionic/angular';

import { FarmaciiPageRoutingModule } from './farmacii-routing.module';

import { FarmaciiPage } from './farmacii.page';

const routes: Routes = [
  {
    path: "",
    component: FarmaciiPage
  }
]; 


@NgModule({
  imports: [
    ApiModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FarmaciiPageRoutingModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [FarmaciiPage]
})
export class FarmaciiPageModule {}
