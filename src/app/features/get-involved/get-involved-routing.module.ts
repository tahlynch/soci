import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInvolvedComponent } from './get-involved.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AthleteComponent } from './athlete/athlete.component';

const routes: Routes = [{
  path: 'get-involved', component: GetInvolvedComponent,
  children: [
    { path: '', redirectTo: 'volunteer', pathMatch: 'full' },
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'become-athlete', component: AthleteComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetInvolvedRoutingModule { }
