import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from 'shared/models/user-credentials';
import { AuthService } from 'shared/services/auth/auth.service';

@Component({
  selector: 'login-with-credentials',
  templateUrl: './login-with-credentials.component.html',
  styleUrls: ['./login-with-credentials.component.scss']
})
export class LoginWithCredentialsComponent {
  @Input() isLoginMode: boolean = true;

  constructor(
    public auth: AuthService,
    private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.auth.clearErrors();
    let url = this.isLoginMode ? '/login' : 'signup';
    this.router.navigate([url]);
  }

  onCredentialsSubmit(credentials: UserCredentials) {
    if (!this.isLoginMode) {
      this.auth.signUpWithCredentials(credentials);
    } else {
      this.auth.signInithCredenetials(credentials);
    }
  }

}
