import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  {
    path: 'events', component: EventsComponent,
    children: [
      {
        path: ':key',
        component: EventDetailComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
