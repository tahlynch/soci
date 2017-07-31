import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Event } from '../data-model';

@Component({
  selector: 'soci-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEventCloseClicked() {
    this.router.navigate(['/events']);
  }
}
