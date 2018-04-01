import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GivingComponent } from './giving.component';
import { DonationsComponent } from './donations/donations.component';
import { SupportersComponent } from './supporters/supporters.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';

const routes: Routes = [{
  path: 'giving', component: GivingComponent,
  children: [
    { path: '', redirectTo: 'donations', pathMatch: 'full' },
    { path: 'donations', component: DonationsComponent },
    { path: 'supporters', component: SupportersComponent },
    { path: 'fundraisers', component: FundraisersComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivingRoutingModule { }
