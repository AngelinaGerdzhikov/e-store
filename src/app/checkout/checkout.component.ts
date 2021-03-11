import { Component, OnInit } from '@angular/core';
import { ShippingAddress } from 'shared/models/shipping-address';
import { AuthService } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { OrderService } from '../services/order.service';
import { Order } from 'shared/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  userId: string;
  userSubscription: Subscription;
  shoppingCart$: Observable<ShoppingCart>;

  constructor(
    private router: Router,
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService
  ) { }
  
  async ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe(user => this.userId = user.uid);
    this.shoppingCart$ = await this.shoppingCartService.getCart();
  }

  async placeOrder(shippingAddress: ShippingAddress, shoppingCartItems) {
    let order = new Order(
      this.userId,
      shippingAddress,
      shoppingCartItems
    );
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
}
