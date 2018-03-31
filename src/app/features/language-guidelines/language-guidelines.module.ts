import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageGuidelinesRoutingModule } from './language-guidelines-routing.module';
import { LanguageGuidelinesComponent } from './language-guidelines.component';

@NgModule({
  imports: [
    CommonModule,
    LanguageGuidelinesRoutingModule
  ],
  declarations: [LanguageGuidelinesComponent]
})
export class LanguageGuidelinesModule { }
