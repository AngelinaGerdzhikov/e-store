import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/services/auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private auth: AuthService
  ) { }

  canActivate() {
    return this.auth.appUser$
      .pipe(
        map(user => user.isAdmin)
      );
  }
}
