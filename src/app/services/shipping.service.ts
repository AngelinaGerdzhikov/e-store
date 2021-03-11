import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShippingAddress } from '../common/models/shipping-address';
import { AuthService } from './auth.service';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(
    private auth: AuthService,
    private db: AngularFireDatabase
  ) { }

  saveAddress(address: ShippingAddress) {
    return this.auth.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.db.object(`/users/${user.uid}`).update({
              shippingAddress: address
          })  
        }

        return of(null);
      })
    );
  }
}
