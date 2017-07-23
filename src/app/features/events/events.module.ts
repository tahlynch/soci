import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdGridListModule} from '@angular/material';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    EventsRoutingModule
  ],
  declarations: [EventsComponent, DateFormatPipe]
})
export class EventsModule { }
