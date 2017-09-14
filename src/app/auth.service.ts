import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  isAnAdmin: boolean = null;

  constructor(public firebaseAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase) {
    this.user = firebaseAuth.authState;
    this.isUserAnAdmin().subscribe(value => this.isAnAdmin = value);
  }

  login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  isUserAnAdmin(): Observable<boolean> {
    return this.user.switchMap((user: firebase.User) => {
      return this.angularFireDatabase.object('/auth/admin/' + user.uid);
    }).map((item) => {
      return item['$value'] != null && item['$value'] === true;
    });
  }
}
