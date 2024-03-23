import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoWeAreComponent } from './who-we-are.component';
import { MissionComponent } from './mission/mission.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: 'whoweare', component: WhoWeAreComponent,
    children: [
      { path: '', redirectTo: 'mission', pathMatch: 'full' },
      { path: 'mission', component: MissionComponent },
      { path: 'boardofdirectors', component: BoardOfDirectorsComponent },
      { path: 'stories', component: StoriesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoWeAreRoutingModule { }
