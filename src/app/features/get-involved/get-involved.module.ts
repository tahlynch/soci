import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule } from '@angular/material';

import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { GetInvolvedComponent } from './get-involved.component';
import { MenuModule } from '../../menu/menu.module';
import { CoachesComponent } from './coaches/coaches.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { AthletesComponent } from './athletes/athletes.component';
import { FamiliesComponent } from './families/families.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    GetInvolvedRoutingModule
  ],
  declarations: [
    GetInvolvedComponent,
    CoachesComponent,
    VolunteersComponent,
    AthletesComponent,
    FamiliesComponent
  ]
})
export class GetInvolvedModule { }
