import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivingRoutingModule } from './giving-routing.module';
import { GivingComponent } from './giving.component';

@NgModule({
  imports: [
    CommonModule,
    GivingRoutingModule
  ],
  declarations: [GivingComponent]
})
export class GivingModule { }
