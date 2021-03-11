import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    CoreRoutingModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
