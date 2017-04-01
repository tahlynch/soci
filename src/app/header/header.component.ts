import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoImage = require('./feature-icon.svg');
  @Output() isHamburgerClicked = new EventEmitter();

  constructor() {}

  onClicked() {
    this.isHamburgerClicked.emit();
  }
}
