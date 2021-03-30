import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Recipe } from 'shared/models/recipe';
import { IngredientsService } from 'shared/services/ingredients.service';
import { RecipesService } from 'shared/services/recipes/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  id: string;
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private ingredientService: IngredientsService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.recipeService.get(this.id)
        .pipe(take(1))
        .subscribe(recipe => this.recipe = recipe);
    }
  }

  addIngredientToShoppingCart(ingredient) {
    this.ingredientService.addToShoppingCart(ingredient).subscribe();
  }
}
