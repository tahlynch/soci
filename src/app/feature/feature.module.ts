// application first feature module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule
  ],
  declarations: [LandingPageComponent, AppBarComponent, FeatureComponent]
})
export class FeatureModule { }
