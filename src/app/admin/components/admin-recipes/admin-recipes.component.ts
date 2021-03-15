import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'shared/models/recipe';
import { RecipesService } from 'shared/services/recipes/recipes.service';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.scss']
})
export class AdminRecipesComponent implements OnDestroy {
  private recipes: Recipe[];
  private subscription: Subscription;
  displayRecipes: Recipe[];

  collectionSize: number;
  page = 1;
  pageSize = 12;

  constructor(private recipeService: RecipesService) {
    this.subscription = this.recipeService.getAll().subscribe(recipes => {
      this.displayRecipes = this.recipes = recipes;
      this.collectionSize = this.displayRecipes.length;
    } );
  }

  filter(query) {
    this.displayRecipes = (query) ?
      this.recipes.filter(r => r.title.toLowerCase().includes(query.toLowerCase())) :
      this.recipes;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
