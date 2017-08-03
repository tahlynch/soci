import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EventPublisherComponent } from './event-publisher/event-publisher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule, MdAutocompleteModule} from '@angular/material';
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
