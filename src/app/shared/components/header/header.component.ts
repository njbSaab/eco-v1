// header.component.ts
import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../core/services/pages.service';
import { MenuItem } from '../../../core/interfaces/menu-item.interface';
import { CartService } from '../../../core/services/cart.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CartModalService } from '../../../core/services/cart-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  showInstallButton = false;
  menuItems: MenuItem[] = [];

  cartCount$: import('rxjs').Observable<number>;
  favCount$: import('rxjs').Observable<number>;

  constructor(
    private pagesService: PagesService,
    private cartService: CartService,
    private favoritesService: FavoritesService,
    private cartModalService: CartModalService
  ) {
    this.cartCount$ = cartService.count$;
    this.favCount$ = favoritesService.count$;
  }

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.pagesService.getPage('menu-items').subscribe({
      next: (page) => {
        if (page?.content?.['items']) {
          this.menuItems = (page.content['items'] as MenuItem[])
            .filter(item => item.isVisible)
            .sort((a, b) => a.order - b.order);
        } else {
          this.menuItems = this.getDefaultMenuItems();
        }
      },
      error: () => {
        this.menuItems = this.getDefaultMenuItems();
      }
    });
  }

  private getDefaultMenuItems(): MenuItem[] {
    return [
      { id: 'home', label: 'Shop Now...', route: '/', order: 1, isVisible: true },
      { id: 'terms', label: 'Terms of Service...', route: '/terms', order: 2, isVisible: true },
      { id: 'about', label: 'About...', route: '/about', order: 3, isVisible: true },
      { id: 'contacts', label: 'Contacts...', route: '/contacts', order: 4, isVisible: true },
      { id: 'faq', label: 'FAQ', route: '/faq', order: 5, isVisible: true },
      { id: 'policy', label: 'Privacy Policy...', route: '/policy', order: 6, isVisible: true }
    ];
  }

  onToggle(event: any): void {
    this.isMenuOpen = event.target.checked;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }

  installPwa(): void {
    // PWA installation logic
  }

  openCart(): void {
    this.cartModalService.open('cart');
  }

  openFavorites(): void {
    this.cartModalService.open('favorites');
  }
}
