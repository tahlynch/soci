import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { GivingRoutingModule } from './giving-routing.module';
import { GivingComponent } from './giving.component';
import { DonationsComponent } from './donations/donations.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { MenuModule } from '../../menu/menu.module';
import { DialogModule } from '../../dialog/dialog.module';
import { DonateDetailComponent } from './donations/donate-detail/donate-detail.component';
import { CorporateSponsorsComponent } from './corporate-sponsors/corporate-sponsors.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    MatButtonModule,
    DialogModule,
    MatIconModule,
    GivingRoutingModule
  ],
  declarations: [GivingComponent, DonationsComponent, FundraisersComponent, DonateDetailComponent, CorporateSponsorsComponent]
})
export class GivingModule { }
