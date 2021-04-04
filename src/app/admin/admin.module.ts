import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminIngredientsComponent } from './components/admin-ingredients/admin-ingredients.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminRecipesComponent } from './components/admin-recipes/admin-recipes.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { AdminGuard } from './services/admin-guard/admin-guard.service';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminOrderComponent,
    ProductFormComponent,
    AdminRecipesComponent,
    RecipeFormComponent,
    AdminIngredientsComponent,
    IngredientFormComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
