import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'soci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoImage = '/assets/images/special-olympics-logo.svg';
  isSignInVisible = false;
  isSignOutVisible = false;
  user: firebase.User;
  isUserAnAdmin: boolean;
  @Output() isHamburgerClicked = new EventEmitter();

  constructor(public authService: AuthService) {
    this.subscribeToAuthorizedUser();
    this.authService.isAdmin().subscribe((isAdmin) => {
      this.isUserAnAdmin = isAdmin;
    });
  }

  onClicked() {
    this.isHamburgerClicked.emit();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0 });
  }

  onSignInClicked() {
    this.authService.login();
  }

  onSignOutClicked() {
    this.authService.logout();
  }

  private subscribeToAuthorizedUser() {
    this.authService.user.subscribe((user: firebase.User) => {
      this.user = user;
      this.toggleSigningStates(user);
    });
  }

  private toggleSigningStates(user: firebase.User) {
    if (user) {
      this.isSignOutVisible = true;
      this.isSignInVisible = false;
    } else {
      this.isSignOutVisible = false;
      this.isSignInVisible = true;
    }
  }
}
