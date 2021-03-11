import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { SortableHeaderDirective } from 'shared/directives/sortable-header.directive';
import { SharedModule } from 'shared/shared.module';
import { MinValidatorDirective } from 'shared/validators/min.validator';
import { UrlValidatorDirective } from 'shared/validators/url.validator';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    MinValidatorDirective,
    UrlValidatorDirective,
    SortableHeaderDirective,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NgbModule,
    SharedModule,
    AppRoutingModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
