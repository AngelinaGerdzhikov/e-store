import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs';
import { Order } from '../common/models/order';
import { ShippingAddress } from '../common/models/shipping-address';
import { ShoppingCart } from '../common/models/shopping-cart';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { ShippingService } from '../services/shipping.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {
  @Input('shoppingCart') shoppingCart: ShoppingCart;
  shippingAddress: ShippingAddress = new ShippingAddress();

  userId: string;
  userSubscription: Subscription;
  appUserSubscription: Subscription;

  constructor(
    private router: Router,
    private auth: AuthService,
    private shippingService: ShippingService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.auth.user$.subscribe(user => this.userId = user.uid);
    this.appUserSubscription = this.auth.appUser$.subscribe(user => {
      this.shippingAddress = user.shippingAddress || this.shippingAddress;
    });
  }

  saveAddress(shippingAddress: ShippingAddress) {
    this.shippingService.saveAddress(shippingAddress).subscribe();
  }

  async placeOrder(shippingAddress: ShippingAddress) {
    let order = new Order(this.userId, shippingAddress, this.shoppingCart.items);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.appUserSubscription.unsubscribe();
  }

}
