import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'shared/models/category';
import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product/product.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from 'shared/services/shopping-cart/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { fadeIn } from 'shared/animations/fade.animation';
import { animateChild, group, query, stagger, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [ 
    fadeIn,
    trigger('productListAnimation', [
      transition(':enter', [
        group([
          query('.product-card', [
            stagger(100, animateChild())
          ])
        ])
      ])
    ]) 
  ]
})
export class ProductsComponent implements OnInit, OnDestroy {
  private productSubscription: Subscription;

  isLoading: boolean = false;
  products: Product[] = [];
  category: string;

  shoppingCart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) { }
  
  async ngOnInit() {
    this.isLoading = true;
    this.shoppingCart$ = await this.shoppingCartService.getCart();
    this.populateProducts();    
  }
  
  private populateProducts() {
    this.productSubscription = this.productService.getAll().pipe(
      switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
    ).subscribe(params => {
      this.category = params.get('category');
      this.isLoading = false;
    });  
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

}
