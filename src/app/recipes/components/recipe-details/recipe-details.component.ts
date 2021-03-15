import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Recipe } from 'shared/models/recipe';
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
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.recipeService.get(this.id)
        .pipe(take(1))
        .subscribe(recipe => this.recipe = recipe);
    }
  }
}
