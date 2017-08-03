import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdGridListModule } from '@angular/material';
import { MaterialModule } from '@angular/material';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { DateFormatPipe } from './date-format.pipe';
import { DialogModule } from '../../dialog/dialog.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsService } from './events.service';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    EventsRoutingModule,
    DialogModule,
    MaterialModule
  ],
  declarations: [EventsComponent, DateFormatPipe, EventDetailComponent],
  providers: [EventsService]
})
export class EventsModule { }
