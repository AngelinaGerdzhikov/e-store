import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'shared/models/recipe';

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
