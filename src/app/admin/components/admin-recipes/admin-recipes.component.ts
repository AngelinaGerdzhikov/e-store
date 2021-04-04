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
  private subscription: Subscription;
  recipes: Recipe[];
  searchQuery: string = '';

  collectionSize: number;
  page = 1;
  pageSize = 12;

  constructor(private recipeService: RecipesService) {
    this.subscription = this.recipeService.getAll().subscribe(recipes => {
      this.recipes = recipes;
      this.collectionSize = this.recipes.length;
    } );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
