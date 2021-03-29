import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'shared/models/ingredient';
import { IngredientsService } from 'shared/services/ingredients.service';

@Component({
  selector: 'app-admin-ingredients',
  templateUrl: './admin-ingredients.component.html',
  styleUrls: ['./admin-ingredients.component.scss']
})
export class AdminIngredientsComponent {
  private ingredients: Ingredient[];
  private subscription: Subscription;
  displayIngredients: Ingredient[];

  collectionSize: number;
  page = 1;
  pageSize = 12;

  constructor(private ingredientsService: IngredientsService) {
    this.subscription = this.ingredientsService.getAll().subscribe(ingredients => {
      this.displayIngredients = this.ingredients = ingredients;
      this.collectionSize = this.displayIngredients.length;
    } );
  }

  filter(query) {
    this.displayIngredients = (query) ?
      this.ingredients.filter(r => r.name.toLowerCase().includes(query.toLowerCase())) :
      this.ingredients;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
