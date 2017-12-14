import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StoryService } from '../story.service';
import { Story } from './story';
import { AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'soci-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.less']
})
export class StoryComponent implements OnInit {
  story: AngularFireObject<any>;
  isGoBackVisible = false;
  constructor(private route: ActivatedRoute, private router: Router, private storyService: StoryService, private location: Location) { }

  ngOnInit() {
    if (window.history.length > 2) {
      this.isGoBackVisible = true;
    }
    this.route.params
      .switchMap((params: Params) => this.storyService.getStory(params['id'])).subscribe((story: any) => {
        this.story = story;
      });
  }

  onBackArrowClicked() {
    this.location.back();
  }

  onImageClicked(image: any) {
    this.router.navigate(['gallery'], { relativeTo: this.route });
  }
}
