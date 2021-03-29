import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeCategory } from 'app/recipes/models/recipe-category';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Ingredient } from 'shared/models/ingredient';
import { Recipe } from 'shared/models/recipe';
import { RecipeCategoriesService } from 'shared/services/recipe-categories/recipe-categories.service';
import { RecipesService } from 'shared/services/recipes/recipes.service';
import { AdminFormComponent } from '../admin-form/admin-form.component';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent extends AdminFormComponent<Recipe> {  
  recipeCategories$: Observable<RecipeCategory[]>;

  constructor(
    private recipeCategoryService: RecipeCategoriesService,
    router: Router,
    route: ActivatedRoute,
    recipesService: RecipesService
  ) {
    super(router, route, recipesService);
    this.url = 'recipes';
    this.recipeCategories$ = this.recipeCategoryService.getAll();
    if (this.id) {
      recipesService.get(this.id)
        .pipe(take(1))
        .subscribe(recipe => this.data = new Recipe(recipe));
    }
   }


  onIngredientAdded(ingredient: Ingredient) {
    this.data.addIngredient(ingredient);
  }

}
