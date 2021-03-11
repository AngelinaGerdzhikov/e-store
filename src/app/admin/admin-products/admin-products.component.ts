import { Component, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { SortEvent } from 'app/common/data-table/sort-event';
import { SortableHeaderDirective } from 'app/common/data-table/sortable-header.directive';
import { ProductService } from 'app/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnDestroy {
  @ViewChildren(SortableHeaderDirective) headers: QueryList<SortableHeaderDirective>;

  private products: Product[] = [];
  private compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

  subscription: Subscription;
  finalProducts: Product[] = [];

  page = 1;
  pageSize = 6;
  collectionSize: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.finalProducts = this.products = products; 
        this.collectionSize = this.finalProducts.length;
      });
  }

  filter(query) {
    this.finalProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting products
    if (direction === '' || column === '') {
      this.finalProducts = this.products;
    } else {
      this.finalProducts = [...this.products].sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
