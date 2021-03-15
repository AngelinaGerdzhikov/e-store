import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminGuard } from './services/admin-guard/admin-guard.service';
import { AdminRecipesComponent } from './components/admin-recipes/admin-recipes.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminOrderComponent,
    ProductFormComponent,
    AdminRecipesComponent,
    RecipeFormComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
