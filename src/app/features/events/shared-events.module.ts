import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DateFormatPipe} from './date-format.pipe';
import {EventsService} from './events.service';
import {DialogModule} from '../../dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [DateFormatPipe, DialogModule],
  declarations: [DateFormatPipe],
  providers: [EventsService]
})
export class SharedEventsModule { }
