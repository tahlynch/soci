import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConformsPredicateObject } from 'lodash';
import * as _ from 'lodash';

import { EventsHelper } from '../../events/events-helper';
import { EventsService } from '../../events/events.service';
import { SociEvent } from '../../events/data-model';

@Component({
  selector: 'soci-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css', '../../events/events.component.css', '../../../dialog/dialog-decision-styles.less']
})
export class MyEventsComponent implements OnInit {
  eventItems: SociEvent[] = [];
  filteredEventItems: SociEvent[] = [];
  filters: ConformsPredicateObject<SociEvent> = {};
  isLoadingEvents = false;

  items: any;
  eventsHelper = new EventsHelper();
  isDeleteDialogOpen = false;
  eventToDelete: any;

  constructor(public eventsService: EventsService, private router: Router, private route: ActivatedRoute) { }

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
    this.router.navigate(['eventpublisher/' + event.key], { relativeTo: this.route.parent });
  }

  onDeleteClicked(event: SociEvent) {
    this.eventToDelete = event;
    this.openDeleteDialog();
  }

  onDeleteConfirmClicked() {
    this.eventsService.deleteEvent(this.eventToDelete.$key);
    this.closeDeleteDialog();
  }

  onDeleteCancelClicked() {
    this.closeDeleteDialog();
  }

  protected openDeleteDialog() {
    this.isDeleteDialogOpen = true;
  }

  protected closeDeleteDialog() {
    this.isDeleteDialogOpen = false;
  }

  private applyFilters() {
    this.filteredEventItems = _.filter(this.eventItems, _.conforms(this.filters));
  }
}
