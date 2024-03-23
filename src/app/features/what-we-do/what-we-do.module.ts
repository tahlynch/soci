import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatWeDoRoutingModule } from './what-we-do-routing.module';
import { WhatWeDoComponent } from './what-we-do.component';
import { MenuModule } from '../../menu/menu.module';
import { SportsDisciplinesComponent } from './sports-disciplines/sports-disciplines.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { UnifiedSportsComponent } from './unified-sports/unified-sports.component';
import { AthleteLeadershipComponent } from './athlete-leadership/athlete-leadership.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    WhatWeDoRoutingModule
  ],
  declarations: [WhatWeDoComponent, SportsDisciplinesComponent, CompetitionsComponent, UnifiedSportsComponent, AthleteLeadershipComponent]
})
export class WhatWeDoModule { }
