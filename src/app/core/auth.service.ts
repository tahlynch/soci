import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class AuthService {
  user$: Observable<User>;
  firebaseUser: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.firebaseUser = afAuth.authState;
    this.user$ = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>('users/' + user.uid).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  isAdmin(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/' + user.uid);
    const data: User = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      roles: {
        subscriber: true
      }
    };
    return userRef.set(data, { merge: true });
  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }
}
