import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth/auth.service';
import { OrderService } from 'shared/services/order/order.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
  orders$;

  page = 1;
  pageSize = 6;
  collectionSize: number;


  constructor(
    private auth: AuthService,
    private orderService: OrderService
  ) { 
    this.orders$ = this.auth.user$.pipe(
      switchMap(user => this.orderService.getOrdersByUser(user.uid))
    );
  }
}
