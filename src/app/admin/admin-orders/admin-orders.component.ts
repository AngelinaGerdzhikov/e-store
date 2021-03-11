import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/common/models/order';
import { OrderService } from 'src/app/services/order.service';

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
