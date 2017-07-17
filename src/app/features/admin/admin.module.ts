import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EventPublisherComponent } from './event-publisher/event-publisher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: [AdminComponent, EventPublisherComponent, MenuComponent]
})
export class AdminModule { }
