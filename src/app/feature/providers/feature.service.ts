import { Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Injectable()
export class FeatureService {
  sideNav: MdSidenav;
  constructor() { }

  openSideNav() {
    this.sideNav.open();
  }

}
