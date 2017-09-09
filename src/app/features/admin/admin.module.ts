import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule, MdAutocompleteModule } from '@angular/material';

import { EventPublisherComponent } from './event-publisher/event-publisher.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { SharedEventsModule } from '../events/shared-events.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdAutocompleteModule,
    SharedEventsModule
  ],
  declarations: [AdminComponent, EventPublisherComponent, MenuComponent, MyEventsComponent],
  providers: []
})
export class AdminModule { }
