import { animateChild, group, query, stagger, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeIn } from 'shared/animations/fade.animation';
import { Category } from 'shared/models/category';
import { CategoryService } from 'shared/services/category/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  animations: [ 
    fadeIn,
    trigger('categoryListAnimation', [
      transition(':enter', [
        group([
          query('li', [
            stagger(100, animateChild())
          ])
        ])
      ])
    ]) 
  ]
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
