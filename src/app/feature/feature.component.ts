import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.less']
})
export class FeatureComponent implements OnInit {
  isSideNavOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
