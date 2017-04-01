import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScreenAtTop: Boolean;
  logoImage = require('./feature-icon.svg');
  @Output() isHamburgerClicked = new EventEmitter();

  constructor() {
    this.onWindowScroll();
  }

  onClicked() {
    this.isHamburgerClicked.emit();
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
