import { Pipe, PipeTransform } from '@angular/core';
import { fooEventTypes } from './data-model';

@Pipe({
  name: 'eventType'
})
export class EventTypeNamePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return fooEventTypes.find(e => e.id === value)[args];
  }

}
