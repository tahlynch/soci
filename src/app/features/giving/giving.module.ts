import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivingRoutingModule } from './giving-routing.module';
import { GivingComponent } from './giving.component';
import { DonationsComponent } from './donations/donations.component';
import { SupportersComponent } from './supporters/supporters.component';
import { FundraisersComponent } from './fundraisers/fundraisers.component';
import { MenuModule } from '../../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    GivingRoutingModule
  ],
  declarations: [GivingComponent, DonationsComponent, SupportersComponent, FundraisersComponent]
})
export class GivingModule { }
