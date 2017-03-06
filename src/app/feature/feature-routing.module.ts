import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeatureComponent } from './feature.component';
import { FirstComponent } from './first/first.component';

const featureRoutes: Routes = [
  {
    path: 'feature',
    component: FeatureComponent,
    children: [
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: '',
        component: LandingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(featureRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureRoutingModule { }
