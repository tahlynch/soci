// application first feature module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureService } from './providers/feature.service';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule
  ],
  declarations: [LandingPageComponent, HeaderComponent, FeatureComponent, FooterComponent],
  providers: [FeatureService]
})
export class FeatureModule { }
