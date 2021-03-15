import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard/auth-guard.service';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminGuard } from './services/admin-guard/admin-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
      path: 'products/new',
      component: ProductFormComponent,
      canActivate: [AuthGuard, AdminGuard]
    },
      {
        path: 'products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'orders/:id',
        component: AdminOrderComponent,
        canActivate: [AuthGuard, AdminGuard]
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
