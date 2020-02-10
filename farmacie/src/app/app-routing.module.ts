import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'farmacii',
    loadChildren: () => import('./farmacii/farmacii.module').then( m => m.FarmaciiPageModule)
  },
  {
    path: 'catena',
    loadChildren: () => import('./catena/catena.module').then( m => m.CatenaPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  // {
  //   path: 'sensi',
  //   loadChildren: () => import('./sensi/sensi.module').then( m => m.SensiPageModule)
  // },
  // {
  //   path: 'catena',
  //   loadChildren: () => import('./catena/catena.module').then( m => m.CatenaPageModule)
  // },
  // {
  //   path: 'helpnet',
  //   loadChildren: () => import('./helpnet/helpnet.module').then( m => m.HelpnetPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
