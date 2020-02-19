import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dias'
})
export class DiasPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    return dias[value];
   
  }

}
