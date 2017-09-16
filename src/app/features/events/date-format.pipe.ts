import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    if (!value || value === undefined || value.toDateString() === 'Invalid Date') {
      return '';
    }
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return monthNames[value.getMonth()] + ' ' + value.getDate();
  }
}
