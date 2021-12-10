import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Recipe } from 'shared/models/recipe';
import { IngredientsService } from 'shared/services/ingredients.service';
import { RecipesService } from 'shared/services/recipes/recipes.service';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  id: string;
  recipe$: Observable<Recipe>;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private ingredientService: IngredientsService
  ) {
    this.recipe$ = this.route.params.pipe(
      switchMap(params => {
        if (params.id) {
          this.id = params.id;
          return this.recipeService.get(this.id)
        }

        return of(null);
      })
    );
  }

  addIngredientToShoppingCart(ingredient) {
    this.ingredientService.addToShoppingCart(ingredient).subscribe();
  }
}
