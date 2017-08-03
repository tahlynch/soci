import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { Event, eventTypes } from './data-model';
import { EventsService } from './events.service';
import { EventItem } from './event-item';
import { EventsHelper } from './events-helper';

@Component({
  selector: 'soci-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  eventItems: EventItem[] = [];
  items: any;
  eventsHelper = new EventsHelper();

  constructor(private router: Router, private route: ActivatedRoute, public eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe((events) => {
      this.eventItems = this.createEventItems(events);
    });
  }

  onEventClicked(event: any) {
    this.router.navigate([event.$key], { relativeTo: this.route });
  }

  private createEventItems(events): EventItem[] {
    const eventItems: EventItem[] = [];
    events.forEach((event) => {
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
