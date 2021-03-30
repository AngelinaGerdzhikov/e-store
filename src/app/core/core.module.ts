import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/navbar/navbar.component';
import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    PageNotFoundComponent
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
