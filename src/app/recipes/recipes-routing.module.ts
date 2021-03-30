import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: 'recipes/:id',
    component: RecipeDetailsComponent
  },
  {
    path: 'recipes',
    component: RecipeBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
