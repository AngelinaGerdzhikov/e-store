import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'shared/models/category';
import { CategoryService } from 'shared/services/category/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnDestroy {
  @Input('category') category;
  private categorySubscription: Subscription;

  categories: Category[] = []

  constructor(private categoryService: CategoryService) { 
    this.categorySubscription = this.categoryService.getAll()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

}
