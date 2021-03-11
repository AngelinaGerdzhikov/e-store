import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Order } from '../common/models/order';
import { ShoppingCartService } from './shopping-cart.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService
  ) { }

  getOrders() {
    return this.db.list('/orders').snapshotChanges().pipe(
      map(c => c.map(c => ({ key: c.payload.key, ...c.payload.val() as any })))
      );
  }

  getOrder(key: string) {
    return this.db.object(`/orders/${key}`).valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.db.list(`/orders/`,
      ref => ref.orderByChild('userId').equalTo(userId)
    ).snapshotChanges().pipe(
      map(c => c.map(c => ({ key: c.payload.key, ...c.payload.val() as any })))
    );
  }

  async placeOrder(order: Order) {
    let result = await this.db.list(`/orders`).push(order);
    this.shoppingCartService.clearCart();
    return result;
  }
}
