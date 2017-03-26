import { Component, HostListener } from '@angular/core';
import { FeatureService } from '../providers/feature.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScreenAtTop: Boolean;
  logoImage = require('./feature-icon.svg');
  constructor(private featureService: FeatureService) {
    this.onWindowScroll();
  }

  onClicked() {
    this.featureService.openSideNav();
  }

  @HostListener('window:scroll', [])
  private onWindowScroll() {
    if (window.scrollY > 0) {
      this.isScreenAtTop = false;
    } else {
      this.isScreenAtTop = true;
    }
  }
}
