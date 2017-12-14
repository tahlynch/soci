import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from './story.service';
import { Story } from './story/story';
import { AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'soci-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.less']
})
export class StoriesComponent implements OnInit {
  submitted = false;
  fileList: FileList;
  model = new Story();
  stories: AngularFireList<any>;
  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit(): void {
    this.stories = this.storyService.allStories();
  }

  onStoryClicked(story: any) {
    this.router.navigate(['/story', story.$key]);
    window.scroll({ top: 0, left: 0 });
  }

  onFileUploadChange(fileList: FileList) {
    this.fileList = fileList;
  }

  onSubmit() {
    this.submitted = false;
    this.model.created = Date.now();
    this.model.auther = 'Millsy Pacino';
    this.storyService.uploadStory(this.model, this.fileList);
  }
}
