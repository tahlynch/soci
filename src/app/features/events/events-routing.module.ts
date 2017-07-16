import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsOverviewComponent } from './events-overview/events-overview.component';

const routes: Routes = [
  {
    path: 'overview', component: EventsOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
