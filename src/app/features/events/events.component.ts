import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConformsPredicateObject } from 'lodash';
import * as _ from 'lodash';

import { eventTypes, SociEvent, eventTimes } from './data-model';
import { EventsService } from './events.service';
import { EventsHelper } from './events-helper';

@Component({
  selector: 'soci-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  items: any;
  eventsHelper = new EventsHelper();
  isLoadingEvents = false;

  eventItems: SociEvent[] = [];
  filteredEventItems: SociEvent[] = [];
  filters: ConformsPredicateObject<SociEvent> = {};

  constructor(private router: Router, private route: ActivatedRoute, public eventsService: EventsService) {
  }

  ngOnInit() {
    this.isLoadingEvents = true;
    this.eventsService.getAllEvents()
      .subscribe(events => {
        this.eventItems = events;
        this.applyFilters();
        this.isLoadingEvents = false;
      });
  }

  onEventClicked(event: SociEvent) {
    this.router.navigate([event.key], { relativeTo: this.route });
  }

  onFiltersEvent(foo: any) {
    this.filters = foo;
    this.applyFilters();
  }

  private applyFilters() {
    this.filteredEventItems = _.filter(this.eventItems, _.conforms(this.filters));
  }
}
