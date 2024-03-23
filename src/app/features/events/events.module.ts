import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule } from '@angular/material';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SharedEventsModule } from './shared-events.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    EventsRoutingModule,
    SharedEventsModule,
    SharedModule
  ],
  declarations: [EventsComponent, EventDetailComponent]
})
export class EventsModule { }
