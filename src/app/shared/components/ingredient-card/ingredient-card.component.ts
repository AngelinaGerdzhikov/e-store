import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ingredient } from 'shared/models/ingredient';
import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product/product.service';

@Component({
  selector: 'ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})
export class IngredientCardComponent implements OnInit {
  @Input('ingredient') ingredient: Ingredient = {} as Ingredient;
  @Input() productUidFormControl: FormControl;
  $product: Observable<Product>;

  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.$product = this.productService.get(this.ingredient.productUid);  
    this.productUidFormControl.valueChanges.subscribe(value => {
      this.$product = this.productService.get(value);    
    }) 
  }
}
