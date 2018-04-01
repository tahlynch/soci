import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { WhatWeDoModule } from './what-we-do/what-we-do.module';
import { StoriesModule } from './stories/stories.module';
import { EventsModule } from './events/events.module';
import { FrequentlyAskedQuestionsModule } from './frequently-asked-questions/frequently-asked-questions.module';
import { GetInvolvedModule } from './get-involved/get-involved.module';
import { GivingModule } from './giving/giving.module';
import { LanguageGuidelinesModule } from './language-guidelines/language-guidelines.module';
import { WhoWeAreModule } from './who-we-are/who-we-are.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    AdminModule,
    WhatWeDoModule,
    StoriesModule,
    EventsModule,
    FrequentlyAskedQuestionsModule,
    GetInvolvedModule,
    GivingModule,
    LanguageGuidelinesModule,
    WhoWeAreModule
  ]
})
export class FeaturesModule { }
