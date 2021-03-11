import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  @Input('showActions') showActions: boolean;
  @Input('shoppingCart') shoppingCart: ShoppingCart;
  
  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
