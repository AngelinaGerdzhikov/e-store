import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Product } from 'shared/models/product';
import { CategoryService } from 'shared/services/category/category.service';
import { ProductService } from 'shared/services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  categories$;
  id: string;
  product: Product = {} as Product;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = this.categoryService.getAll();  

    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
      this.productService.get(this.id)
        .pipe(take(1))
        .subscribe(p => this.product = p);
    }
  }

  save(product: Product) {

    if (this.id) {
      this.productService.update(this.id, product)
        .then(() => this.router.navigate(['/admin/products']))
        .catch(err => console.log(err));
    } else {
      this.productService.create(product)
        .then(() => this.router.navigate(['/admin/products']))
        .catch(err => console.log(err));     
    }
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    this.productService.delete(this.id)
      .then(() => this.router.navigate(['/admin/products']))
      .catch(err => console.log(err));
    
  }

}
