import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { IngredientCardComponent } from './components/ingredient-card/ingredient-card.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { SortableHeaderDirective } from './directives/sortable-header/sortable-header.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { MinValidatorDirective } from './validators/min.validator';
import { UrlValidatorDirective } from './validators/url.validator';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    MinValidatorDirective,
    UrlValidatorDirective,
    SortableHeaderDirective,
    DropdownDirective,
    FormErrorComponent,
    RecipeCardComponent,
    IngredientCardComponent,
    ShortenPipe,
    FilterPipe,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AngularFireAuthModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AngularFireAuthModule,
    ProductCardComponent,
    ProductQuantityComponent,
    MinValidatorDirective,
    UrlValidatorDirective,
    SortableHeaderDirective,
    DropdownDirective,
    FormErrorComponent,
    RecipeCardComponent,
    IngredientCardComponent,
    ShortenPipe,
    FilterPipe,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
