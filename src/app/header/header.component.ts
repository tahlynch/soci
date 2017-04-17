import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoImage = '/assets/images/special-olympics-logo.svg';
  @Output() isHamburgerClicked = new EventEmitter();

  constructor() {}

  onClicked() {
    this.isHamburgerClicked.emit();
  }
}
