import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInvolvedComponent } from './get-involved.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { AthletesComponent } from './athletes/athletes.component';
import { FamiliesComponent } from './families/families.component';
import { CoachesComponent } from './coaches/coaches.component';

const routes: Routes = [{
  path: 'get-involved', component: GetInvolvedComponent,
  children: [
    { path: '', redirectTo: 'coaches', pathMatch: 'full' },
    { path: 'coaches', component: CoachesComponent },
    { path: 'volunteers', component: VolunteersComponent },
    { path: 'athletes', component: AthletesComponent },
    { path: 'families', component: FamiliesComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetInvolvedRoutingModule { }
