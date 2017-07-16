import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { StoryComponent } from './story/story.component';
import { StoryService } from './story.service';
import { LimitToPipe } from './story/limit-to.pipe';
import { StoryPhotoGalleryComponent } from './story/story-photo-gallery/story-photo-gallery.component';
import { StoriesRoutingModule } from './stories-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoriesRoutingModule
  ],
  declarations: [StoriesComponent, StoryComponent, LimitToPipe, StoryPhotoGalleryComponent],
  providers: [StoryService]
})
export class StoriesModule { }
