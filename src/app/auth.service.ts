import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private adminAccounts: FirebaseListObservable<any[]>;

  constructor(public firebaseAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase) {
    this.user = firebaseAuth.authState;
    this.adminAccounts = this.getAdminAccounts();
  }

  login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  isAdmin(): Observable<boolean> {
    return Observable.combineLatest(
      this.user,
      this.adminAccounts
    ).map(([user, adminAccounts]) => {
      return this.getAdminStatus(user, adminAccounts);
    });
  }

  private getAdminAccounts(): FirebaseListObservable<any[]> {
    return this.angularFireDatabase.list('/auth/admin');
  }

  private getAdminStatus(user: firebase.User, adminAccounts: any[]): boolean {
    if (!user) {
      return false;
    }
    const result = adminAccounts.find(account => account.$key === user.uid);
    if (!result || result.$value !== true) {
      return false;
    }
    return true;
  }
}
