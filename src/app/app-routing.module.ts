import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './stories/story/story.component'
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { EventsOverviewComponent } from 'app/events/events-overview/events-overview.component';

const appRoutes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'stories', component: StoriesComponent
  },
  {
    path: 'story/:id', component: StoryComponent
  },
  {
    path: 'whatwedo', component: WhatWeDoComponent
  },
  {
    path: 'events', component: EventsOverviewComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
