import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GivingComponent } from './giving.component';
import { DonationsComponent } from './donations/donations.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { DonateDetailComponent } from './donations/donate-detail/donate-detail.component';
import { CorporateSponsorsComponent } from './corporate-sponsors/corporate-sponsors.component';

const routes: Routes = [{
  path: 'giving', component: GivingComponent,
  children: [
    { path: '', redirectTo: 'donations', pathMatch: 'full' },
    {
      path: 'donations', component: DonationsComponent,
      children: [
        { path: 'give', component: DonateDetailComponent }
      ]
    },
    { path: 'corporatesponsors', component: CorporateSponsorsComponent },
    { path: 'fundraisers', component: FundraisersComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivingRoutingModule { }
