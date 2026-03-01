import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Quiz } from '../interfaces/quiz.interface';

const STORAGE_KEY = 'shop_favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private _items$ = new BehaviorSubject<Quiz[]>(this.load());

  items$ = this._items$.asObservable();
  count$ = this._items$.pipe(map(items => items.length));

  private load(): Quiz[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  private save(items: Quiz[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    this._items$.next(items);
  }

  toggle(quiz: Quiz): void {
    const items = this._items$.getValue();
    if (items.some(i => i.id === quiz.id)) {
      this.save(items.filter(i => i.id !== quiz.id));
    } else {
      this.save([...items, quiz]);
    }
  }

  remove(id: number): void {
    this.save(this._items$.getValue().filter(i => i.id !== id));
  }

  isFavorite(id: number): boolean {
    return this._items$.getValue().some(i => i.id === id);
  }
}
