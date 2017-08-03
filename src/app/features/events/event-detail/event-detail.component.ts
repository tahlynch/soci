import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Event } from '../data-model';
import { EventsService } from '../events.service';
import { EventsHelper } from '../events-helper';

@Component({
  selector: 'soci-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event = new Event();
  eventsHelper = new EventsHelper();
  constructor(private router: Router, private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.loadEvent();
  }

  onEventCloseClicked() {
    this.router.navigate(['/events']);
  }

  private loadEvent() {
    this.route.params
      .switchMap((params: Params) => this.eventsService.getEvent(params['key'])).subscribe((event: any) => {
        this.event = event;
      });
  }
}
