import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventsHelper } from '../../events/events-helper';
import { EventsService } from '../../events/events.service';
import { SociEvent } from '../../events/data-model';

@Component({
  selector: 'soci-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css', '../../events/events.component.css', '../../../dialog/dialog-decision-styles.less']
})
export class MyEventsComponent implements OnInit {
  items: any;
  eventsHelper = new EventsHelper();
  isDeleteDialogOpen = false;
  eventToDelete: any;

  constructor(public eventsService: EventsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
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
}
