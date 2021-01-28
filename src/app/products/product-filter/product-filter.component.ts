import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/common/models/category';
import { CategoryService } from 'src/app/services/category.service';

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
