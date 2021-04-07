import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { MembershipRoutingModule } from './membership-routing.module';
import { LoginWithCredentialsComponent } from './components/login-with-credentials/login-with-credentials.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginWithCredentialsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MembershipRoutingModule
  ]
})
export class MembershipModule { }
