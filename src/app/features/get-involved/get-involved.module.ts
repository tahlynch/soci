import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule } from "@angular/material";

import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { GetInvolvedComponent } from './get-involved.component';
import { MenuStickyDirective } from "./menu-sticky.directive";

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    GetInvolvedRoutingModule
  ],
  declarations: [GetInvolvedComponent, MenuStickyDirective],
  exports:[MenuStickyDirective]
})
export class GetInvolvedModule { }
