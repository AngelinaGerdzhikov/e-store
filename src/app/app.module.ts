import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { SortableHeaderDirective } from 'shared/directives/sortable-header.directive';
import { SharedModule } from 'shared/shared.module';

import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { BsNavbarComponent } from './navbar/navbar.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MinValidatorDirective } from './validators/min.validator';
import { UrlValidatorDirective } from './validators/url.validator';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    MinValidatorDirective,
    UrlValidatorDirective,
    SortableHeaderDirective,
    ProductFilterComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    AdminOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    NgbModule,

    SharedModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
