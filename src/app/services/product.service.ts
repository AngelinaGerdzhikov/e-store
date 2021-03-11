import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  
  get(productId: string) {
    return this.db.object(`/products/${productId}`).valueChanges() as Observable<Product>;
  }
  
  getAll() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(c => c.map(c => ({ key: c.payload.key, ...c.payload.val() as any })))
      );
    }

  create(product: Product) {
      return this.db.list(`/products`).push(product);
  }

  update(productId, product) {
    return this.db.object(`products/${productId}`).update(product);
  }

  delete(productId) {
    return this.db.object(`products/${productId}`).remove();
  }
}
