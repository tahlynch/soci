import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { Ng2ImgToolsModule } from 'ng2-img-tools';

import { EventPublisherComponent } from './event-publisher/event-publisher.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { SharedEventsModule } from '../events/shared-events.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    SharedEventsModule,
    Ng2ImgToolsModule
  ],
  declarations: [AdminComponent, EventPublisherComponent, MenuComponent, MyEventsComponent],
  providers: []
})
export class AdminModule { }
