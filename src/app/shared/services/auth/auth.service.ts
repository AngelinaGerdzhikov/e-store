import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { AppUser } from 'shared/models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'shared/services/user/user.service';
import { UserCredentials } from 'shared/models/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  isLoading: boolean = false;
  error: string = null;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user$ = this.afAuth.authState;
  }
  
  loginWithGoogle() {
    this.initRequestSetup();

    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(() => this.handleLoginSuccess())
    .catch((error) => this.handleLoginError(error));
  }
  
  signUpWithCredentials(credentials: UserCredentials) {
    this.initRequestSetup();

    return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => this.handleLoginSuccess())
    .catch((error) => this.handleLoginError(error));
  }
  
  signInithCredenetials(credentials: UserCredentials) {
    this.initRequestSetup();

    return this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => this.handleLoginSuccess())
      .catch((error) => this.handleLoginError(error));
  }

  logout() {
    this.afAuth.signOut();
  }

  clearErrors() {
    this.error = null;
    this.isLoading = false;
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
    .pipe(
      switchMap(user => {
        if (user) return this.userService.get(user.uid) as Observable<AppUser>;

        return of(null);
      })
    );
  }

  private initRequestSetup() {
    this.error = null;
    this.isLoading = true;
    this.setReturnUrl();
  }

  private setReturnUrl() {
    let returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

  private handleLoginSuccess() {
    this.isLoading = false;
  }

  private handleLoginError(error) {
    this.isLoading = false;
    this.error = error;
  }

}
