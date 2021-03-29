import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from 'shared/models/recipe';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data/data.service';


@Injectable({
  providedIn: 'root'
})
export class RecipesService extends DataService<Recipe> {
  private userDisplayName: string;
  private userUid: string;

  constructor(
    private auth: AuthService,
    db: AngularFireDatabase
  ) { 
    super(db, 'recipes');
    this.auth.user$.subscribe(user => {
      this.userDisplayName = user.displayName;
      this.userUid = user.uid;
    })
  }

  create(recipe: Recipe) {
    recipe.authorDisplayName = this.userDisplayName;
    recipe.authorUid = this.userUid;
    return super.create(recipe);
  }

}
