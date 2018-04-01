import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatWeDoComponent } from './what-we-do.component';
import { SportsDisciplinesComponent } from './sports-disciplines/sports-disciplines.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { UnifiedSportsComponent } from './unified-sports/unified-sports.component';
import { AthleteLeadershipComponent } from './athlete-leadership/athlete-leadership.component';

const routes: Routes = [
  {
    path: 'whatwedo', component: WhatWeDoComponent,
    children: [
      { path: '', redirectTo: 'sportsdisciplines', pathMatch: 'full' },
      { path: 'sportsdisciplines', component: SportsDisciplinesComponent },
      { path: 'competitions', component: CompetitionsComponent },
      { path: 'unifiedsports', component: UnifiedSportsComponent },
      { path: 'athleteleadershipprogramme', component: AthleteLeadershipComponent }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatWeDoRoutingModule { }
