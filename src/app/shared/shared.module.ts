import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventTypeNamePipe } from '../features/events/event-type-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EventTypeNamePipe],
  exports: [FormsModule, EventTypeNamePipe]
})
export class SharedModule { }
