import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatenaPageRoutingModule } from './catena-routing.module';

import { CatenaPage } from './catena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatenaPageRoutingModule
  ],
  declarations: [CatenaPage]
})
export class CatenaPageModule {}
