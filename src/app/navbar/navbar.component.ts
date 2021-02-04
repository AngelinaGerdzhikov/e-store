import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from '../common/models/app-user';
import { ShoppingCart } from '../common/models/shopping-cart';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {
  isCollapsed = true;
  appUser: AppUser;

  cart$: Observable<ShoppingCart>;
  
  constructor(
    public auth: AuthService,
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) { }
  
  async ngOnInit() {
    this.auth.appUser$.subscribe(user => this.appUser = user);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
