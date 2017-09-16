import { EventItem } from './event-item';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';
import { SociEvent } from './data-model';

@Injectable()
export class EventsService {
  eventItems: EventItem[] = [];
  isLoadingEvents = false;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.isLoadingEvents = true;
    this.getAllEvents().subscribe((events) => {
      this.eventItems = this.createEventItems(events);
      this.isLoadingEvents = false;
    });
  }

  getAllEvents(): FirebaseListObservable<any[]> {
    return this.angularFireDatabase.list('/events');
  }

  getEvent(key: string) {
    return this.angularFireDatabase.object('/events/' + key);
  }

  saveEvent(event: SociEvent) {
    const stringDateEvent = this.getStringDateEvent(event);
    this.angularFireDatabase.list('/events').push(stringDateEvent);
  }

  deleteEvent(key: string) {
    this.angularFireDatabase.object('/events/' + key).remove();
  }

  private getStringDateEvent(event: SociEvent) {
    const stringDateEvent: any = event;
    stringDateEvent.startDate = event.startDate.toString();
    stringDateEvent.endDate = event.endDate.toString();
    return stringDateEvent;
  }

  private createEventItems(events): EventItem[] {
    const eventItems: EventItem[] = [];
    events.forEach((event: SociEvent) => {
      const startDate = new Date(event.startDate);
      let eventItem = eventItems.find(e => e.date.getDay() === startDate.getDay() &&
        e.date.getMonth() === startDate.getMonth() &&
        e.date.getFullYear() === startDate.getFullYear());
      if (!eventItem) {
        eventItem = new EventItem();
        eventItem.date = startDate;
        eventItems.push(eventItem);
      }
      eventItem.events.push(event);
    });
    return eventItems.sort(this.eventItemSortComparer);
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
