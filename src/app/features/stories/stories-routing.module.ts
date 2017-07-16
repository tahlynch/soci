import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './stories.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [{
  path: 'stories', component: StoriesComponent
},
{
  path: 'story/:id', component: StoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
