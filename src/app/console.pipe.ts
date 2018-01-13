import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'console'
})
export class ConsolePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log()
    console.log(value)
    return 'sakis';
  }

}
