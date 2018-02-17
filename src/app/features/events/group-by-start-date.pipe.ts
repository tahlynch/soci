import { Pipe, PipeTransform } from '@angular/core';

import { SociEvent } from './data-model';

@Pipe({
  name: 'groupByStartDate'
})
export class GroupByStartDatePipe implements PipeTransform {

  transform(value: Array<SociEvent>, args?: any): Array<EventItem> {
    const groupedArray: EventItem[] = [];
    value.forEach((event: SociEvent) => {
      const startDate = new Date(event.startDate);
      let eventItem = groupedArray.find(e => e.date.getDate() === startDate.getDate() &&
        e.date.getMonth() === startDate.getMonth() &&
        e.date.getFullYear() === startDate.getFullYear());
      if (!eventItem) {
        eventItem = new EventItem();
        eventItem.date = startDate;
        groupedArray.push(eventItem);
      }
      eventItem.events.push(event);
      eventItem.events.sort(this.sociEventSortComparer);
    });
    return groupedArray.sort(this.eventItemSortComparer);
  }

  private sociEventSortComparer(a: SociEvent, b: SociEvent) {
    if (a.startDate < b.startDate) {
      return -1;
    }
    if (a.startDate > b.startDate) {
      return 1;
    }
    return 0;
  }

  private eventItemSortComparer(a: EventItem, b: EventItem) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  }
}

export class EventItem {
  date: Date;
  events: SociEvent[] = [];
}
