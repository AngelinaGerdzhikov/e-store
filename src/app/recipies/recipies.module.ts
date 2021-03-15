import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { RecipiesRoutingModule } from './recipies-routing.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent
  ],
  imports: [
    SharedModule,
    RecipiesRoutingModule
  ],
  exports: [ ]
})
export class RecipiesModule { }
