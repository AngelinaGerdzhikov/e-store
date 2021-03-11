import { Component } from '@angular/core';
import { OrderService } from 'app/services/order.service';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent {
  orders$: Observable<Order[]>;

  page = 1;
  pageSize = 6;
  collectionSize: number;

  constructor(orderService: OrderService) { 
    this.orders$ = orderService.getOrders();
  }
}
