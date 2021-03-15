import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/recipes/models/ingredient';
import { Recipe } from 'app/recipes/models/recipe';
import { Observable } from 'rxjs';
import { RecipesService } from 'shared/services/recipes/recipes.service';

@Component({
  selector: 'recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(
    private recipesService: RecipesService
  ) {
    this.recipes$ = this.recipesService.getAll();
  }

  ngOnInit(): void {
  }

}
