import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FirstComponent } from './first/first.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
const appRoutes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'first', component: FirstComponent
  },
  {
    path: 'whatwedo', component: WhatWeDoComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
