import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/navbar/navbar.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
