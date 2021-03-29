import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Product } from 'shared/models/product';
import { CategoryService } from 'shared/services/category/category.service';
import { ProductService } from 'shared/services/product/product.service';
import { AdminFormComponent } from '../admin-form/admin-form.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent extends AdminFormComponent<Product>{
  categories$;

  constructor(
    private categoryService: CategoryService,
    productService: ProductService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(router, route, productService);
    this.url = 'products';
    this.categories$ = this.categoryService.getAll();
  }
}
