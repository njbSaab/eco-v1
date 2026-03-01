import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Quiz } from '../interfaces/quiz.interface';
import { CartItem } from '../interfaces/cart.interface';

const STORAGE_KEY = 'shop_cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items$ = new BehaviorSubject<CartItem[]>(this.load());

  items$ = this._items$.asObservable();
  count$ = this._items$.pipe(map(items => items.reduce((s, i) => s + i.quantity, 0)));

  private load(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  private save(items: CartItem[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    this._items$.next(items);
  }

  add(quiz: Quiz): void {
    const items = this._items$.getValue();
    const existing = items.find(i => i.quiz.id === quiz.id);
    if (existing) {
      this.save(items.map(i => i.quiz.id === quiz.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      this.save([...items, { quiz, quantity: 1 }]);
    }
  }

  remove(id: number): void {
    this.save(this._items$.getValue().filter(i => i.quiz.id !== id));
  }

  updateQuantity(id: number, qty: number): void {
    if (qty < 1) { this.remove(id); return; }
    this.save(this._items$.getValue().map(i => i.quiz.id === id ? { ...i, quantity: qty } : i));
  }

  clear(): void {
    this.save([]);
  }

  isInCart(id: number): boolean {
    return this._items$.getValue().some(i => i.quiz.id === id);
  }
}
