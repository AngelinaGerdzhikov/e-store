import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/models/recipe';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input('recipes') recipes: Recipe[];

  constructor() { }

  ngOnInit(): void {
  }

}
