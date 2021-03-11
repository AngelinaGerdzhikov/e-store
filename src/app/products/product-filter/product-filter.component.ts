import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'app/services/category.service';
import { Subscription } from 'rxjs';
import { Category } from 'shared/models/category';

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
