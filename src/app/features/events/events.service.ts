import { EventItem } from './event-item';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/rx';
import { SociEvent, SociLocation } from './data-model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class EventsService {
  eventItems: EventItem[] = [];
  isLoadingEvents = false;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.isLoadingEvents = true;
    this.getAllEvents().subscribe((events) => {
      this.eventItems.length = 0;
      this.createEventItems(events).forEach((event) => {
        this.eventItems.push(event);
      });
      this.isLoadingEvents = false;
    });
  }

  getAllEvents(): FirebaseListObservable<any[]> {
    return this.angularFireDatabase.list('/events');
  }

  getEvent(key: string) {
    return this.angularFireDatabase.object('/events/' + key);
  }

  saveEvent(eventForm: FormGroup, location: SociLocation) {
    const stringDateEvent = this.getStringDateEvent(this.prepareSaveEvent(eventForm, location));
    this.angularFireDatabase.list('/events').push(stringDateEvent);
  }

  updateEvent(eventForm: FormGroup, location: SociLocation, eventKey: string) {
    const stringDateEvent = this.getStringDateEvent(this.prepareSaveEvent(eventForm, location));
    this.angularFireDatabase.object('/events/' + eventKey).$ref.set(stringDateEvent);
  }

  deleteEvent(key: string) {
    this.angularFireDatabase.object('/events/' + key).remove();
  }

  private prepareSaveEvent(eventForm: FormGroup, location: SociLocation): SociEvent {
    const formModel = eventForm.value;
    const saveEvent: SociEvent = {
      startDate: formModel.startDate as Date,
      endDate: formModel.endDate as Date,
      startTime: formModel.startTime as string,
      endTime: formModel.endTime as string,
      eventType: formModel.eventType as string,
      eventStatus: formModel.eventStatus as string,
      title: formModel.title as string,
      description: formModel.description as string,
      locationPlaceName: formModel.locationPlaceName as string,
      location: location
    };
    return saveEvent;
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
