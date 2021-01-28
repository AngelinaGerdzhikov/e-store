import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { AppUser } from '../common/models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user$ = this.afAuth.authState;
  }

  login() {
    let returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
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
}
