import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../providers/feature.service';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {
  constructor(private featureService: FeatureService) { }

  ngOnInit() {
  }

  onClicked() {
    this.featureService.openSideNav();
  }
}
