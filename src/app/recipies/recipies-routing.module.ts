import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';

const routes: Routes = [
  {
    path: 'recipies',
    children: [
      {
        path: '',
        component: RecipeBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipiesRoutingModule { }
