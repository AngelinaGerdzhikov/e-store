import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-store App';
  active = 1;
  products$;
  
  constructor(private db: AngularFireDatabase) {
    this.products$ = db.list('/products').valueChanges();
  }
}
