import { Component, OnInit } from '@angular/core';
import { StoryService } from '../providers/story.service';
import { Story } from './story';
import { FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})
export class FirstComponent implements OnInit {


  submitted = false;
  fileList: FileList;
  model = new Story();
  stories: FirebaseListObservable<any>;
  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.stories = this.storyService.allStories();
  }

  onFileUploadChange(fileList: FileList) {
    this.fileList = fileList;
  }

  onSubmit() {
    this.submitted = true;
    this.model.created = Date.now();
    this.storyService.uploadStory(this.model, this.fileList);
  }
}
