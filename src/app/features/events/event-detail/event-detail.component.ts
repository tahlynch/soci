import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SociEvent } from '../data-model';
import { EventsService } from '../events.service';
import { EventsHelper } from '../events-helper';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'soci-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {
  event: SociEvent;
  eventsHelper = new EventsHelper();
  eventSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.loadEvent();
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

  onEventCloseClicked() {
    this.router.navigate(['/events']);
  }

  private loadEvent() {
    this.eventSubscription = this.route.params.switchMap((params: Params) =>
      this.eventsService.getEvent(params['key']).valueChanges()).subscribe((event: SociEvent) => {
        this.event = event;
      });
  }
}
