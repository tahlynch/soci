import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StoryService } from '../../providers/story.service';
import { Story } from './story';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.less']
})
export class StoryComponent implements OnInit {
  story: FirebaseObjectObservable<any> = new FirebaseObjectObservable();
  isGoBackVisible = false;
  constructor(private route: ActivatedRoute, private router: Router, private storyService: StoryService, private location: Location) { }

  ngOnInit() {
    if (window.history.length > 2) {
      this.isGoBackVisible = true;
    }
    this.route.params
      .switchMap((params: Params) => this.storyService.getStory(params['id'])).subscribe((story: any) => {
        this.story = story;
      })
  }

  onBackArrowClicked() {
    this.location.back();
  }

  onImageClicked(image: any) {
    this.router.navigate(['gallery'], { relativeTo: this.route });
  }
}
