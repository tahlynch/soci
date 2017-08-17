import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule, MdAutocompleteModule} from '@angular/material';

import { EventPublisherComponent } from './event-publisher/event-publisher.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AdminService } from './admin.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdAutocompleteModule
  ],
  declarations: [AdminComponent, EventPublisherComponent, MenuComponent],
  providers: [ AdminService ]
})
export class AdminModule { }
