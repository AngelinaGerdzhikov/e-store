import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { BsNavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';

// Directives
import { MinValidatorDirective } from './validators/min.validator';
import { SortableHeaderDirective } from './common/data-table/sortable-header.directive';
import { UrlValidatorDirective } from './validators/url.validator';


// Services
import { AuthService } from 'shared/services/auth/auth.service';
import { AuthGuard } from 'shared/services/auth-guard/auth-guard.service';
import { UserService } from 'shared/services/user/user.service';
import { AdminGuard } from 'shared/services/admin-guard/admin-guard.service';
import { ShoppingCartService } from 'shared/services/shopping-cart/shopping-cart.service';
import { CategoryService } from 'shared/services/category/category.service';
import { ProductService } from 'shared/services/product/product.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShippingService } from 'shared/services/shipping/shipping.service';
import { OrderService } from 'shared/services/order/order.service';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { environment } from 'environments/environment';

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
    ProductCardComponent,
    ProductQuantityComponent,
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

    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AdminGuard,
    CategoryService,
    ProductService,
    ShoppingCartService,
    ShippingService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
