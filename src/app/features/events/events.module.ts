import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdGridListModule } from '@angular/material';
import { MaterialModule } from '@angular/material';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { FilterComponent } from './filter/filter.component';
import { SharedEventsModule } from './shared-events.module';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    EventsRoutingModule,
    MaterialModule,
    SharedEventsModule
  ],
  declarations: [EventsComponent, EventDetailComponent, FilterComponent]
})
export class EventsModule { }
