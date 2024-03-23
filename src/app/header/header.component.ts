import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { AuthService } from '../core/auth.service';
import { User } from '../core/user';

@Component({
  selector: 'soci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoImage = '/assets/images/special-olympics-logo.svg';
  isSignInVisible = false;
  isSignOutVisible = false;
  user: User  = {uid: '', displayName: '', email: '', roles: {}};
  firebaseUser: firebase.User;
  isUserAnAdmin: boolean;
  @Output() isHamburgerClicked = new EventEmitter();

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.firebaseUser.subscribe(firebaseUser => this.firebaseUser = firebaseUser);
    this.authService.user$.subscribe(user => this.user = user);
  }

  onClicked() {
    this.isHamburgerClicked.emit();
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0 });
  }

  onSignInClicked() {
    this.authService.googleLogin();
  }

  onSignOutClicked() {
    this.authService.signOut();
  }
}
