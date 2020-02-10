import { NgModule } from '@angular/core';
import { FiltruPipe } from './filtru.pipe';

@NgModule({
  declarations: [FiltruPipe],
  exports:[FiltruPipe]
  
})
export class PipesModule { }
