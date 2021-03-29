import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'shared/models/ingredient';
import { Product } from 'shared/models/product';
import { CategoryService } from 'shared/services/category/category.service';
import { IngredientsService } from 'shared/services/ingredients.service';
import { ProductService } from 'shared/services/product/product.service';

import { AdminFormComponent } from '../admin-form/admin-form.component';


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent extends AdminFormComponent<Ingredient> implements OnDestroy{
  categories$;
  products: Product[];
  filteredProducts: Product[] = [];
  productsSubscription: Subscription;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    router: Router,
    route: ActivatedRoute,
    ingredientService: IngredientsService
  ) {
    super(router, route, ingredientService);
    this.url = 'ingredients';

    this.categories$ = this.categoryService.getAll();  
    this.productsSubscription = this.productService.getAll().subscribe(products => {
      this.products = this.filteredProducts = products;
    })
  }

  filterProductsByCategory(category: string) {
    this.filteredProducts = this.products.filter(p => p.category.toLowerCase() == category.toLowerCase());
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}
