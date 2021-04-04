import { Component, OnDestroy } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeCategory } from 'app/recipes/models/recipe-category';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from 'shared/models/ingredient';
import { Recipe } from 'shared/models/recipe';
import { IngredientsService } from 'shared/services/ingredients.service';
import { RecipeCategoriesService } from 'shared/services/recipe-categories/recipe-categories.service';
import { RecipesService } from 'shared/services/recipes/recipes.service';

import { AdminFormComponent } from '../admin-form/admin-form.component';
import { RecipeFormCreator } from './recipe-form-creator';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent extends AdminFormComponent<Recipe> implements OnDestroy {  
  recipeCategories$: Observable<RecipeCategory[]>;
  ingredients: Ingredient[];
  ingredientSubscription: Subscription;

  constructor(
    private recipeCategoryService: RecipeCategoriesService,
    private ingredientService: IngredientsService,
    router: Router,
    route: ActivatedRoute,
    recipesService: RecipesService
  ) {
    super(router, route, recipesService, Recipe);
    this.url = 'recipes';
    this.recipeCategories$ = this.recipeCategoryService.getAll();
    this.ingredientSubscription = 
      this.ingredientService.getAll().subscribe(ingredients => this.ingredients = ingredients);
  }
  
  get ingredientFormArray() {
    return (<FormArray>this.dataForm.get('ingredients'));
  }
      
  createForm() {
    this.dataForm = RecipeFormCreator.createForm();
  }

  populateForm(data: Recipe) {
    RecipeFormCreator.createIngredientsControlArray(data.ingredients, this.ingredientFormArray);
  }

  onAddIngredient() {
    this.ingredientFormArray.push(RecipeFormCreator.createIngredientControl());
  }

  onDeleteIngredient(index: number) {
    this.ingredientFormArray.removeAt(index);
    this.ingredientFormArray.markAsTouched();
    // this.dataForm.get('ingredients').updateValueAndValidity();
  }

  onIngredientSelected(ingredientOptionIndex, ingredientControlIndex) {
    let ingredientControl = this.ingredientFormArray.controls[ingredientControlIndex];
    let ingredientOption = this.ingredients[ingredientOptionIndex];
    ingredientControl.patchValue(ingredientOption);
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }
}
