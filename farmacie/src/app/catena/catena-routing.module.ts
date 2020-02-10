import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatenaPage } from './catena.page';

const routes: Routes = [
  {
    path: '',
    component: CatenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatenaPageRoutingModule {}
