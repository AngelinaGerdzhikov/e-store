import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Recipe } from 'shared/models/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list(`/recipes`).snapshotChanges().pipe(
      map(c => c.map(c => ({ key: c.payload.key, ...c.payload.val() as any })))
      );
    }

  create(recipe: Recipe) {
    return this.db.list(`/recipes`).push(recipe);
  }
}
