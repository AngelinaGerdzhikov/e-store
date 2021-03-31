import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeCategory } from 'app/recipes/models/recipe-category';
import { Observable } from 'rxjs';
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
  @ViewChild('f', { static: true }) form: NgForm;
  recipeCategories$: Observable<RecipeCategory[]>;

  constructor(
    private recipeCategoryService: RecipeCategoriesService,
    router: Router,
    route: ActivatedRoute,
    recipesService: RecipesService
  ) {
    super(router, route, recipesService, Recipe);
    this.url = 'recipes';
    this.recipeCategories$ = this.recipeCategoryService.getAll();
  }

  onIngredientAdded(ingredient: Ingredient) {
    let ingredientsControl = this.form.control.get('ingredients');
    ingredientsControl.value.push(ingredient);
    ingredientsControl.markAsDirty();

    // this.data.addIngredient(ingredient);
  }
}
