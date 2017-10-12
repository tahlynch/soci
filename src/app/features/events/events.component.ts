import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { eventTypes, SociEvent } from './data-model';
import { EventsService } from './events.service';
import { EventItem } from './event-item';
import { EventsHelper } from './events-helper';

@Component({
  selector: 'soci-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  items: any;
  eventsHelper = new EventsHelper();
  eventItems: EventItem[] = [];

  constructor(private router: Router, private route: ActivatedRoute, public eventsService: EventsService) {
    this.eventItems = this.eventsService.eventItems;
  }

  ngOnInit() {
  }

  onEventClicked(event: SociEvent) {
    this.router.navigate([event.$key], { relativeTo: this.route });
  }
}
