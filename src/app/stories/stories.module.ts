import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { StoryComponent } from './story/story.component';
import { StoryService } from '../providers/story.service';
import { LimitToPipe } from './story/limit-to.pipe';
import { StoryPhotoGalleryComponent } from './story/story-photo-gallery/story-photo-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [StoriesComponent, StoryComponent, LimitToPipe, StoryPhotoGalleryComponent],
  providers: [StoryService]
})
export class StoriesModule { }
