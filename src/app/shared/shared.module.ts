import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AdminGuard } from './services/admin-guard/admin-guard.service';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { CategoryService } from './services/category/category.service';
import { OrderService } from './services/order/order.service';
import { ProductService } from './services/product/product.service';
import { ShippingService } from './services/shipping/shipping.service';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent
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
  ]
})
export class SharedModule { }
