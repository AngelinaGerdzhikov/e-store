import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShippingAddress } from 'shared/models/shipping-address';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth/auth.service';
import { ShippingService } from 'shared/services/shipping/shipping.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {
  @ViewChild('f', { static: true }) form: ElementRef;
  @Input('shoppingCart') shoppingCart: ShoppingCart;
  shippingAddress: ShippingAddress = new ShippingAddress();

  appUserSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private shippingService: ShippingService,
  ) { }

  ngOnInit(): void {
    this.appUserSubscription = this.auth.appUser$.subscribe(user => {
      this.shippingAddress = user.shippingAddress || this.shippingAddress;
    });
  }

  saveAddress(shippingAddress: ShippingAddress) {
    this.shippingService.saveAddress(shippingAddress).subscribe();
  }

  ngOnDestroy() {
    this.appUserSubscription.unsubscribe();
  }

}
