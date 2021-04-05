import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart/shopping-cart.service';

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
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) { }
  
  async ngOnInit() {
    this.auth.appUser$.subscribe(user => this.appUser = user);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  isSectionActive(section: string): boolean {
    let element = false;
    this.route.fragment.subscribe((fragment: string) => {
      element = fragment === section.split("#").pop();
    });
    return element;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
