import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import * as firebase from 'firebase';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  foo1 = '';
  constructor(private ref: ChangeDetectorRef, private af: AngularFire) {
  }

  ngOnInit(): void {
    // this.foo();
  }

  private foo() {
    const storageRef = firebase.storage().ref().child('application-images/logo.png');
    return storageRef.getDownloadURL().then((url) => {
      this.foo1 = url;
      this.ref.detectChanges();
    });
  }
}
