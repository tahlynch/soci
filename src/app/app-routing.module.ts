import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/feature', pathMatch: 'full' },
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
