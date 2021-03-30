import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'shared/models/recipe';
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
