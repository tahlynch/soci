import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule } from '@angular/material';

import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { GetInvolvedComponent } from './get-involved.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AthleteComponent } from './athlete/athlete.component';
import { MenuModule } from '../../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    GetInvolvedRoutingModule
  ],
  declarations: [GetInvolvedComponent, VolunteerComponent, AthleteComponent]
})
export class GetInvolvedModule { }
