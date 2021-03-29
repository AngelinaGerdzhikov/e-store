import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'shared/models/ingredient';
import { IngredientsService } from 'shared/services/ingredients.service';

@Component({
  selector: 'add-recipe-ingredient',
  templateUrl: './add-recipe-ingredient.component.html',
  styleUrls: ['./add-recipe-ingredient.component.scss']
})
export class AddRecipeIngredientComponent implements OnInit {
  @Output('ingredientAdded') ingredientAdded = new EventEmitter<Ingredient>();
  ingredients$: Observable<Ingredient[]>;
  ingredient: Ingredient = { } as Ingredient;

  constructor(
    private ingredientService: IngredientsService
  ) { }

  ngOnInit(): void {
    this.ingredients$ = this.ingredientService.getAll();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredientAdded.emit(ingredient);
  }
}
