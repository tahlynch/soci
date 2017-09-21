import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule, MdAutocompleteModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { EventPublisherComponent } from './event-publisher/event-publisher.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { SharedEventsModule } from '../events/shared-events.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAytOSf8PNR5odPxYA6qGhyLYJL14tl2l4',
      libraries: ['places']
    }),
    CommonModule,
    FormsModule,
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
