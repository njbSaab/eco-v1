import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ModalTab = 'cart' | 'favorites';

@Injectable({ providedIn: 'root' })
export class CartModalService {
  isOpen$ = new BehaviorSubject<boolean>(false);
  activeTab$ = new BehaviorSubject<ModalTab>('cart');

  open(tab: ModalTab = 'cart'): void {
    this.activeTab$.next(tab);
    this.isOpen$.next(true);
  }

  close(): void {
    this.isOpen$.next(false);
  }

  toggle(): void {
    this.isOpen$.next(!this.isOpen$.getValue());
  }
}
