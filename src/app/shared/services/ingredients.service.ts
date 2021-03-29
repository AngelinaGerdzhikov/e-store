import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Ingredient } from 'shared/models/ingredient';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from './product/product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private db: AngularFireDatabase,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) { }

  get(ingredientId: string) {
    return this.db.object(`/ingredients/${ingredientId}`).valueChanges() as Observable<Ingredient>;
  }

  getAll() {
    return this.db.list(`/ingredients`).snapshotChanges().pipe(
      map(c => c.map(c => ({ key: c.payload.key, ...c.payload.val() as any })))
      );
    }

  create(ingredient: Ingredient) {
    return this.db.list(`/ingredients`).push(ingredient);
  }

  update(ingredientId, ingredient) {
    return this.db.object(`ingredients/${ingredientId}`).update(ingredient);
  }

  delete(ingredientId) {
    return this.db.object(`ingredients/${ingredientId}`).remove();
  }

  addToShoppingCart(ingredient: Ingredient) {
    return this.productService.get(ingredient.productUid).pipe(
      switchMap(product => {
        if (product) return this.shoppingCartService.addToCart(product, ingredient.quantity);
      })
    );
  }
}
