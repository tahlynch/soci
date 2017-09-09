import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EventPublisherComponent } from './event-publisher/event-publisher.component';
import { MyEventsComponent } from './my-events/my-events.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'myevents',
        pathMatch: 'full'
      },
      {
        path: 'myevents',
        component: MyEventsComponent
      },
      {
        path: 'eventpublisher',
        component: EventPublisherComponent
      },
      {
        path: 'eventpublisher/:key',
        component: EventPublisherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
