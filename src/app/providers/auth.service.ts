import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public angularFire: AngularFire) { }

  loginWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout(): Promise<void> {
    return this.angularFire.auth.logout();
  }
}
