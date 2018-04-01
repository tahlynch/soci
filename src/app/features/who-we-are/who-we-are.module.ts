import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { WhoWeAreComponent } from './who-we-are.component';
import { MenuModule } from '../../menu/menu.module';
import { MissionComponent } from './mission/mission.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    WhoWeAreRoutingModule
  ],
  declarations: [WhoWeAreComponent, MissionComponent, BoardOfDirectorsComponent, StoriesComponent]
})
export class WhoWeAreModule { }
