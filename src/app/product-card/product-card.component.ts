import { Component, Input } from '@angular/core';
import { Product } from '../common/models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  @Input('showActions') showActions: boolean;
  
  constructor() { }
}
