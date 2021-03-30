import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService<T> {

  constructor(
    protected db: AngularFireDatabase,
    protected url: string
  ) { }

  get(id: string) {
    return this.db.object(`/${this.url}/${id}`).valueChanges() as Observable<T>;
  }

  getAll() {
    return this.db.list(`/${this.url}`).snapshotChanges().pipe(
      map(c => c.map(c => ({ key: c.payload.key, ...c.payload.val() as any })))
      );
    }

  create(item: T) {
    return this.db.list(`/${this.url}`).push(item);
  }

  update(id: string, item: T) {
    return this.db.object(`${this.url}/${id}`).update(item);
  }

  delete(id: string) {
    return this.db.object(`${this.url}/${id}`).remove();
  }
}
