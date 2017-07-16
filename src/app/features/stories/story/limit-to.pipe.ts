import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return [];
    }
    if (value.length < 3) {
      return value;
    }
// let items = [];
//     items = value.slice(0, 3);
    return value.slice(0, args);
  }

}
