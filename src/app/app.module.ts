import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'environments/environment';
import { SharedModule } from 'shared/shared.module';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MembershipModule } from './membership/membership.module';
import { RecipiesModule } from './recipies/recipies.module';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    ShoppingModule,
    RecipiesModule,
    AdminModule,
    AppRoutingModule,
    CoreModule,
    MembershipModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
