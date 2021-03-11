import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'app/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent {
  orderId: string;
  order$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService) {
      this.orderId = this.route.snapshot.paramMap.get('id');
      this.order$ = this.orderService.getOrder(this.orderId);
  }

}
