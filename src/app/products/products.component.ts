import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../common/models/category';
import { Product } from '../common/models/product';
import { ProductService } from '../services/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy {
  private productSubscription: Subscription;
  
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(
    route: ActivatedRoute,
    private productService: ProductService
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

  filterByCategory() {
      this.filteredProducts = !this.category ?
        this.products :
        this.products.filter(p => p.category.toLowerCase() === this.category);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

}
