import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { SortableHeaderDirective } from './directives/sortable-header.directive';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { CategoryService } from './services/category/category.service';
import { OrderService } from './services/order/order.service';
import { ProductService } from './services/product/product.service';
import { ShippingService } from './services/shipping/shipping.service';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { UserService } from './services/user/user.service';
import { MinValidatorDirective } from './validators/min.validator';
import { UrlValidatorDirective } from './validators/url.validator';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    MinValidatorDirective,
    UrlValidatorDirective,
    SortableHeaderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AngularFireAuthModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AngularFireAuthModule,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    ShippingService,
    OrderService
  ]
})
export class SharedModule { }
