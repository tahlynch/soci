import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageGuidelinesComponent } from './language-guidelines.component';

const routes: Routes = [{path: 'languageguidelines', component: LanguageGuidelinesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageGuidelinesRoutingModule { }
