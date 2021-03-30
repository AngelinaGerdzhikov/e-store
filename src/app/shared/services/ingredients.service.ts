import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Ingredient } from 'shared/models/ingredient';
import { Product } from 'shared/models/product';

import { DataService } from './data/data.service';
import { ProductService } from './product/product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService extends DataService<Ingredient> {

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    db: AngularFireDatabase,
  ) { 
    super(db, 'ingredients');
  }

  addToShoppingCart(ingredient: Ingredient) {
    return this.productService.get(ingredient.productUid).pipe(
      switchMap(product => {
        if (product) {
          return this.shoppingCartService.addToCart(
            new Product({...product, key: ingredient.productUid }),
            ingredient.quantity
          );
        }
        return of(null);
      })
    );
  }
}
