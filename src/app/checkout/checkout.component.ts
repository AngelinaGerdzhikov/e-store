import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShippingAddress } from '../common/models/shipping-address';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../common/models/app-user';
import { Observable, Subscription } from 'rxjs';
import { ShippingService } from '../services/shipping.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../common/models/shopping-cart';
import { ShoppingCartItem } from '../common/models/shopping-cart-item';
import { OrderService } from '../services/order.service';
import { Order } from '../common/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  shoppingCart: ShoppingCart;
  cartSubscription: Subscription;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) { }
  
  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.shoppingCart = cart);   
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
