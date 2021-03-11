import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
