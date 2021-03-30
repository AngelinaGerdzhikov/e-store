import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { RecipeCategory } from '../../../recipes/models/recipe-category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeCategoriesService {
  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<RecipeCategory[]> {
    return this.db.list(
      '/recipe-categories',
      ref => ref.orderByChild('name')
    ).snapshotChanges().pipe(
      map(c => c.map(c => ({ key: c.payload.key, ...c.payload.val() as any })))
      );
    }
}
