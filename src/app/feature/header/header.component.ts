import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../providers/feature.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private featureService: FeatureService) { }

  ngOnInit() {
  }

  onClicked() {
    this.featureService.openSideNav();
  }
}
