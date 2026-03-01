import {
  Component, HostListener, OnInit, OnDestroy,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { LightboxService, LightboxState } from '../../../core/services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('backdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('220ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('180ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('panel', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.86)', filter: 'blur(10px)' }),
        animate(
          '300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          style({ opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' })
        )
      ]),
      transition(':leave', [
        animate('180ms ease-in',
          style({ opacity: 0, transform: 'scale(0.92)', filter: 'blur(4px)' })
        )
      ])
    ])
  ]
})
export class LightboxComponent implements OnInit, OnDestroy {
  state: LightboxState | null = null;
  isZoomed = false;
  isLoaded = false;

  private sub!: Subscription;
  private touchStartX = 0;

  constructor(
    private lightboxService: LightboxService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.lightboxService.state$.subscribe(s => {
      // Reset when image actually changes
      const prevSrc = this.currentSrc;
      this.state = s;
      const newSrc = this.currentSrc;

      if (newSrc !== prevSrc) {
        this.isLoaded = false;
        this.isZoomed = false;
      }

      document.body.style.overflow = s ? 'hidden' : '';
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    document.body.style.overflow = '';
  }

  // ── Computed ──────────────────────────────────────────

  get currentSrc(): string {
    return this.state?.images[this.state.index] ?? '';
  }

  get total(): number {
    return this.state?.images.length ?? 0;
  }

  get currentIndex(): number {
    return this.state?.index ?? 0;
  }

  get hasMultiple(): boolean {
    return this.total > 1;
  }

  // ── Keyboard ──────────────────────────────────────────

  @HostListener('document:keydown.escape')
  onEsc(): void { this.close(); }

  @HostListener('document:keydown.arrowleft')
  onLeft(): void { this.lightboxService.prev(); }

  @HostListener('document:keydown.arrowright')
  onRight(): void { this.lightboxService.next(); }

  // ── Touch / swipe ─────────────────────────────────────

  @HostListener('touchstart', ['$event'])
  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(dx) > 48) {
      dx < 0 ? this.lightboxService.next() : this.lightboxService.prev();
    }
  }

  // ── Actions ───────────────────────────────────────────

  close(): void { this.lightboxService.close(); }

  onOverlayClick(): void { this.close(); }

  onImageClick(e: MouseEvent): void {
    e.stopPropagation();
    this.isZoomed = !this.isZoomed;
  }

  goTo(index: number, e: MouseEvent): void {
    e.stopPropagation();
    this.lightboxService.goTo(index);
  }

  navigate(dir: 1 | -1, e: MouseEvent): void {
    e.stopPropagation();
    dir === 1 ? this.lightboxService.next() : this.lightboxService.prev();
  }

  onImageLoad(): void {
    this.isLoaded = true;
    this.cdr.markForCheck();
  }
}
