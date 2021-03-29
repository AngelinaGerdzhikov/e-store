import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'shared/models/ingredient';
import { CategoryService } from 'shared/services/category/category.service';
import { ProductService } from 'shared/services/product/product.service';
import { take } from 'rxjs/operators';
import { IngredientsService } from 'shared/services/ingredients.service';


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent {
  categories$;
  products$;
  id: string;
  ingredient: Ingredient = {} as Ingredient;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private ingredientService: IngredientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = this.categoryService.getAll();  
    this.products$ = this.productService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
      this.ingredientService.get(this.id)
        .pipe(take(1))
        .subscribe(p => this.ingredient = p);
    }
  }

  save(ingredient: Ingredient) {
    if (this.id) {
      this.ingredientService.update(this.id, ingredient)
        .then(() => this.router.navigate(['/admin/ingredients']))
        .catch(err => console.log(err));
    } else {
      this.ingredientService.create(ingredient)
        .then(() => this.router.navigate(['/admin/ingredients']))
        .catch(err => console.log(err));     
    }
  }

  delete() {
    if (!confirm('Are you sure you want to delete this ingredient?')) return;
    
    this.ingredientService.delete(this.id)
      .then(() => this.router.navigate(['/admin/ingredients']))
      .catch(err => console.log(err));
    
  }
}
