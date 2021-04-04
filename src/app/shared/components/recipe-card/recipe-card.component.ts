import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'shared/models/recipe';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input('recipe') recipe: Recipe;
  
  constructor() { }

}
