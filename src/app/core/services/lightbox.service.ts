import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LightboxState {
  images: string[];
  index: number;
  alt: string;
}

@Injectable({ providedIn: 'root' })
export class LightboxService {
  private _state$ = new BehaviorSubject<LightboxState | null>(null);
  state$ = this._state$.asObservable();

  open(images: string[], index = 0, alt = ''): void {
    this._state$.next({ images, index, alt });
  }

  close(): void {
    this._state$.next(null);
  }

  next(): void {
    const s = this._state$.getValue();
    if (!s || s.images.length <= 1) return;
    this._state$.next({ ...s, index: (s.index + 1) % s.images.length });
  }

  prev(): void {
    const s = this._state$.getValue();
    if (!s || s.images.length <= 1) return;
    this._state$.next({ ...s, index: (s.index - 1 + s.images.length) % s.images.length });
  }

  goTo(index: number): void {
    const s = this._state$.getValue();
    if (!s) return;
    this._state$.next({ ...s, index });
  }
}
