import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './shopping/components/products/products.component';

const routes: Routes = [
  {
    path: '', 
    component: ProductsComponent,
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module')
      .then(m => m.RecipesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
