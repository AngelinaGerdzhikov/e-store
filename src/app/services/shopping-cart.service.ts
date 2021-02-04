import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../common/models/product';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCart } from '../common/models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object(`/shopping-carts/${cartId}`).valueChanges()
    .pipe(
      map((x: any) => new ShoppingCart(x.dateCreated, x.items ))
    );
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private getItemRef(cartId: string, productId: string) {
    return this.db.object(`/shopping-carts/${cartId}/items/${productId}`);
  }

  async addToCart(product: Product) {
    return this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    return this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change) {
    let cartId = await this.getOrCreateCartId();
    let itemRef = this.getItemRef(cartId, product.key);

    itemRef.snapshotChanges().pipe(take(1))
      .subscribe(item => {
        itemRef.update({
          product:  product,
          quantity: ( item.payload.child('quantity').val() || 0) + change
        });
      })
  }
  
}
