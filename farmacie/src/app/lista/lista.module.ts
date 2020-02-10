import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';

import { ApiModule } from "src/app/api/api.module";

import { RouterModule, Routes } from "@angular/router";
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: "",
    component: ListaPage
  }
];

@NgModule({
  imports: [
    PipesModule,
    ApiModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
