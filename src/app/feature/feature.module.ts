// application first feature module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MaterialModule } from '@angular/material';
import { NavigationModule } from './navigation/navigation.module';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';
import { FirstComponent } from './first/first.component';
import { TransformDirective } from './transform.directive';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    NavigationModule
  ],
  declarations: [LandingPageComponent, HeaderComponent, FeatureComponent, FooterComponent, FirstComponent, TransformDirective],
  providers: []
})
export class FeatureModule { }
