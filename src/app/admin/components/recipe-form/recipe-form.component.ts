import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeCategory } from 'app/recipes/models/recipe-category';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Ingredient } from 'shared/models/ingredient';
import { Recipe } from 'shared/models/recipe';
import { RecipeCategoriesService } from 'shared/services/recipe-categories/recipe-categories.service';
import { RecipesService } from 'shared/services/recipes/recipes.service';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  private userDisplayName: string;
  private userUid: string;
  
  id: string;
  recipeCategories$: Observable<RecipeCategory[]>;
  recipe: Recipe = new Recipe();

  constructor(
    private recipesService: RecipesService,
    private recipeCategoryService: RecipeCategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.recipeCategories$ = this.recipeCategoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.recipesService.get(this.id)
        .pipe(take(1))
        .subscribe(recipe => this.recipe = new Recipe(recipe));
    }
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.recipe.addIngredient(ingredient);
  }

  save(recipe: Recipe) {
    if (this.id) {
      this.recipesService.update(this.id, recipe)
        .then(() => this.router.navigate(['/admin/recipes']))
        .catch(err => console.log(err));
    } else {
      this.recipesService.create(this.recipe)
        .then(() => this.router.navigate(['/admin/recipes']))
        .catch(err => console.log(err));     
    }
  }

}
