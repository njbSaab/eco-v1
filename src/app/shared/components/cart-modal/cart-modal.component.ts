import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../../core/interfaces/cart.interface';
import { Quiz } from '../../../core/interfaces/quiz.interface';
import { CartService } from '../../../core/services/cart.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CartModalService, ModalTab } from '../../../core/services/cart-modal.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent {
  isOpen$: Observable<boolean>;
  activeTab$: Observable<ModalTab>;
  cartItems$: Observable<CartItem[]>;
  cartCount$: Observable<number>;
  favItems$: Observable<Quiz[]>;
  favCount$: Observable<number>;

  constructor(
    public modalService: CartModalService,
    public cartService: CartService,
    public favoritesService: FavoritesService
  ) {
    this.isOpen$ = modalService.isOpen$;
    this.activeTab$ = modalService.activeTab$;
    this.cartItems$ = cartService.items$;
    this.cartCount$ = cartService.count$;
    this.favItems$ = favoritesService.items$;
    this.favCount$ = favoritesService.count$;
  }

  setTab(tab: ModalTab): void {
    this.modalService.activeTab$.next(tab);
  }

  close(): void {
    this.modalService.close();
  }

  removeFromCart(id: number): void {
    this.cartService.remove(id);
  }

  updateQty(id: number, qty: number): void {
    this.cartService.updateQuantity(id, qty);
  }

  removeFromFav(id: number): void {
    this.favoritesService.remove(id);
  }
}
