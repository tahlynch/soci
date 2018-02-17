import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { DateFormatPipe } from './date-format.pipe';
import { EventsService } from './events.service';
import { DialogModule } from '../../dialog/dialog.module';
import { GroupByStartDatePipe } from './group-by-start-date.pipe';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAytOSf8PNR5odPxYA6qGhyLYJL14tl2l4',
      libraries: ['places']
    }),
    CommonModule,
    DialogModule
  ],
  exports: [DateFormatPipe, DialogModule, AgmCoreModule, GroupByStartDatePipe],
  declarations: [DateFormatPipe, GroupByStartDatePipe],
  providers: [EventsService]
})
export class SharedEventsModule { }
