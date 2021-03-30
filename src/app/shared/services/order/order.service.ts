import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from 'shared/models/order';
import { ShoppingCartService } from 'shared/services/shopping-cart/shopping-cart.service';
import { map } from 'rxjs/operators';
import { DataService } from '../data/data.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService extends DataService<Order> {

  constructor(
    private shoppingCartService: ShoppingCartService,
    db: AngularFireDatabase
  ) { 
    super(db, 'orders');
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
