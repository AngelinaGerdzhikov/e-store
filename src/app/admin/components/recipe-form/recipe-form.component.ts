import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'shared/models/ingredient';
import { Recipe } from 'shared/models/recipe';
import { AuthService } from 'shared/services/auth/auth.service';
import { RecipesService } from 'shared/services/recipes/recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  private userDisplayName: string;
  private userUid: string;

  constructor(
    private auth: AuthService,
    private recipesService: RecipesService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.userDisplayName = user.displayName;
      this.userUid = user.uid;
    })
  }

  createRecipe() {
    this.recipesService.create(new Recipe(
      'Delicious Recipe',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg",
      [new Ingredient('carrots', 2)],
      this.userDisplayName,
      this.userUid
    ))
  }

}
