import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeListItemComponent } from './components/recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeListItemComponent
  ],
  imports: [
    SharedModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
