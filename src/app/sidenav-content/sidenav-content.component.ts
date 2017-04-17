import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.less']
})
export class SidenavContentComponent {
  specialOlympoicsLogo = '/assets/images/special-olympics-logo.svg';
  @Output() toggleSideNav = new EventEmitter();

  closeSideNav() {
    this.toggleSideNav.emit();
  }
}
