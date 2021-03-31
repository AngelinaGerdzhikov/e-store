import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from 'shared/models/product';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService<Product> {

  constructor(db: AngularFireDatabase) {
    super(db, 'products');
  }
  
}
