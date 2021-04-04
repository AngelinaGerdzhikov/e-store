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
  private subscription: Subscription;
  ingredients: Ingredient[];
  searchQuery: string;

  collectionSize: number;
  page = 1;
  pageSize = 12;

  constructor(private ingredientsService: IngredientsService) {
    this.subscription = this.ingredientsService.getAll().subscribe(ingredients => {
      this.ingredients = ingredients;
      this.collectionSize = this.ingredients.length;
    } );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
