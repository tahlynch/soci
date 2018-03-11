import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { GetInvolvedComponent } from './get-involved.component';

@NgModule({
  imports: [
    CommonModule,
    GetInvolvedRoutingModule
  ],
  declarations: [GetInvolvedComponent]
})
export class GetInvolvedModule { }
