import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../common/models/category';
import { Product } from '../common/models/product';
import { ProductService } from '../services/product.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../common/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private productSubscription: Subscription;
  
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  shoppingCart: ShoppingCart = new ShoppingCart();
  cartSubscription: Subscription;

  constructor(
    route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) { 
    this.productSubscription = this.productService.getAll().pipe(
      switchMap(products => {
        this.products = products;
        return route.queryParamMap
      })
    ).subscribe(params => {
      this.category = params.get('category');
      this.filterByCategory();
    });    
  }

  async ngOnInit() {
    this.cartSubscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => this.shoppingCart = cart);
  }

  filterByCategory() {
      this.filteredProducts = !this.category ?
        this.products :
        this.products.filter(p => p.category.toLowerCase() === this.category);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

}
