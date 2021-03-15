import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/models/recipe';

@Component({
  selector: 'recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
