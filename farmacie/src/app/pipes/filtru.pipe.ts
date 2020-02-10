import { Pipe, PipeTransform } from '@angular/core';
import { Med } from '../model/model';

@Pipe({
  name: 'filtru'
})
export class FiltruPipe implements PipeTransform {

  transform(meds: Med[], text: string): Med[] {
    
    if(text.length ===0) {return meds;}
    text=text.toLocaleLowerCase();

    return meds.filter( med => {
      return med.name.toLocaleLowerCase().includes(text);
    });

  }

}
