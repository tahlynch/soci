import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsOverviewComponent } from './events-overview/events-overview.component';
import { EventPublisherComponent } from './event-publisher/event-publisher.component';

const routes: Routes = [
  {
    path: 'overview', component: EventsOverviewComponent
  },
  {
    path: 'publisher', component: EventPublisherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
