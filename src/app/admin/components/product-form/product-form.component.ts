import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'shared/models/product';
import { CategoryService } from 'shared/services/category/category.service';
import { ProductService } from 'shared/services/product/product.service';
import { UrlValidatorDirective } from 'shared/validators/url.validator';

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
    super(router, route, productService, Product);
    this.url = 'products';
    this.categories$ = this.categoryService.getAll();
  }

  createForm() {
    this.dataForm = new FormGroup({
      'title': new FormControl( null, [ Validators.required ]),
      'description': new FormControl( null, 
        [ Validators.required, Validators.minLength(40) ]
      ),
      'price': new FormControl( null, 
        [ Validators.required, Validators.min(0) ]),
      'category': new FormControl( null, Validators.required),
      'imageUrl': new FormControl(
        null,
        [ Validators.required, new UrlValidatorDirective().validate ]
      ),
    })
  }
}
