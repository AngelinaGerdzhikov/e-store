import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from '../common/models/app-user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class BsNavbarComponent {
  isCollapsed = true;
  appUser: AppUser;
  
  constructor(
    public auth: AuthService,
    private router: Router
  ) {
    this.auth.appUser$.subscribe(user => this.appUser = user);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
