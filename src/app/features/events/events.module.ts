import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsOverviewComponent } from './events-overview/events-overview.component';
import { EventPublisherComponent } from './event-publisher/event-publisher.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [EventsOverviewComponent, EventPublisherComponent]
})
export class EventsModule { }
