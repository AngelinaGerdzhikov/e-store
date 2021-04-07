import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCredentials } from 'shared/models/user-credentials';
import { AuthService } from 'shared/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoginMode = true;

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe(url => this.isLoginMode = url[0].path === 'login');
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

}
