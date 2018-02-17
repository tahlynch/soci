import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatProgressSpinnerModule, MatIconModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { FilterComponent } from './filter/filter.component';
import { SharedEventsModule } from './shared-events.module';
import { FilterStickyDirective } from './filter/filter-sticky.directive';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    EventsRoutingModule,
    SharedEventsModule,
    FormsModule
  ],
  declarations: [EventsComponent, EventDetailComponent, FilterComponent, FilterStickyDirective]
})
export class EventsModule { }
