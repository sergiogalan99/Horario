import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horas'
})
export class HorasPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let horas = ["08:10h - 09:05h", "09:05h - 10:00h", "10:00h - 10:55h", "11:25h - 12:20h", "12:20h - 13:15h","13:15h - 14:10h"];
    return horas[value];
   
  }

}