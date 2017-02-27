import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FeatureService } from '../providers/feature.service';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('sidenav') sideNav: MdSidenav;

  constructor(private featureService: FeatureService) { }

  ngAfterViewInit(){
    this.featureService.sideNav = this.sideNav;
  }
}
