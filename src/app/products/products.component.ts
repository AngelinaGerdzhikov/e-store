import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'shared/models/category';
import { Product } from 'shared/models/product';
import { ProductService } from '../services/product.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

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

  shoppingCart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) { }
  
  async ngOnInit() {
    this.shoppingCart$ = await this.shoppingCartService.getCart();
    this.populateProducts();    
  }
  
  filterByCategory() {
    this.filteredProducts = !this.category ?
    this.products :
    this.products.filter(p => p.category.toLowerCase() === this.category);
  }
  
  private populateProducts() {
    this.productSubscription = this.productService.getAll().pipe(
      switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
    ).subscribe(params => {
      this.category = params.get('category');
      this.filterByCategory();
    });  
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

}
