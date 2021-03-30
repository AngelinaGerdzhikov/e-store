import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard/auth-guard.service';
import { CanDeactivateGuardService } from 'shared/services/can-deactivate-guard/can-deactivate-guard.service';
import { AdminIngredientsComponent } from './components/admin-ingredients/admin-ingredients.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminRecipesComponent } from './components/admin-recipes/admin-recipes.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { AdminGuard } from './services/admin-guard/admin-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {
        path: 'products/new',
        component: ProductFormComponent,
        canDeactivate: [ CanDeactivateGuardService ]
      },
      {
        path: 'products/:id',
        component: ProductFormComponent,
        canDeactivate: [ CanDeactivateGuardService ]
      },
      {
        path: 'products',
        component: AdminProductsComponent,
      },
      {
        path: 'orders/:id',
        component: AdminOrderComponent,
      },
      {
        path: 'orders',
        component: AdminOrdersComponent,
      },
      {
        path: 'recipes/new',
        component: RecipeFormComponent,
        canDeactivate: [ CanDeactivateGuardService ]
      },
      {
        path: 'recipes/:id',
        component: RecipeFormComponent,
        canDeactivate: [ CanDeactivateGuardService ]
      },
      {
        path: 'recipes',
        component: AdminRecipesComponent,
      },
      {
        path: 'ingredients/new',
        component: IngredientFormComponent,
        canDeactivate: [ CanDeactivateGuardService ]
      },
      {
        path: 'ingredients/:id',
        component: IngredientFormComponent,
        canDeactivate: [ CanDeactivateGuardService ]
      },
      {
        path: 'ingredients',
        component: AdminIngredientsComponent,
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
