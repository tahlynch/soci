import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrequentlyAskedQuestionsRoutingModule } from './frequently-asked-questions-routing.module';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions.component';

@NgModule({
  imports: [
    CommonModule,
    FrequentlyAskedQuestionsRoutingModule
  ],
  declarations: [FrequentlyAskedQuestionsComponent]
})
export class FrequentlyAskedQuestionsModule { }
