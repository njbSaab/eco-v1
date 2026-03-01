// src/app/view/quiz-single/quiz-single/quiz-single.component.ts

import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Quiz } from '../../../core/interfaces/quiz.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../core/services/quiz.service';
import { ScrollTopService } from '../../../core/services/scroll-top.service';
import { CartService } from '../../../core/services/cart.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CartModalService } from '../../../core/services/cart-modal.service';
import { LightboxService } from '../../../core/services/lightbox.service';

@Component({
  selector: 'app-quiz-single',
  templateUrl: './quiz-single.component.html',
  styleUrls: ['./quiz-single.component.scss'],
  animations: [
    trigger('blurIn', [
      transition(':enter', [
        query('.rounded-2xl', [
          style({ opacity: 0, filter: 'blur(10px)' }),
          stagger(150, [
            animate('700ms ease-in-out', style({ opacity: 1, filter: 'blur(0px)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class QuizSingleComponent implements OnInit {
  quiz: Quiz | null = null;
  relatedQuizzes: Quiz[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private scrollTop: ScrollTopService,
    public cartService: CartService,
    public favoritesService: FavoritesService,
    private cartModalService: CartModalService,
    private lightboxService: LightboxService
  ) {}

  ngOnInit(): void {
    this.scrollTop.toTop();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.quiz = null;
        this.scrollTop.toTop();
        this.loadQuiz(+id);
      }
    });
    this.quizService.getQuizzes().subscribe({
      next: (data) => { this.relatedQuizzes = data.filter(q => q.isActive); },
      error: () => {},
    });
  }

  loadQuiz(id: number): void {
    this.quizService.getQuizById(id).subscribe({
      next: (quiz) => { this.quiz = quiz || null; },
      error: (err) => { console.error('Failed to load product:', err); },
    });
  }

  /** All product images: quiz.images[] if present, else mock ×5 for dev */
  get galleryImages(): string[] {
    if (this.quiz?.images?.length) return this.quiz.images;
    if (this.quiz?.previewImage)   return Array(5).fill(this.quiz.previewImage);
    return [];
  }

  openLightbox(index = 0): void {
    const imgs = this.galleryImages;
    if (!imgs.length) return;
    this.lightboxService.open(imgs, index, this.quiz?.title ?? '');
  }

  addToCart(): void {
    if (this.quiz) {
      this.cartService.add(this.quiz);
      this.cartModalService.open('cart');
    }
  }
  
  // quiz-single.component.ts
  
  cleanPrice(value: string | undefined): number {
    if (!value) return 0;
    const cleaned = value.replace(/[^0-9]/g, '');
    const parsed = Number(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }
  
  get originalPrice(): number {
    return this.cleanPrice(this.quiz?.titleAdm);
  }
  
  get discountedPrice(): number {
    return Math.round(this.originalPrice * 1.1);
  }
  
  get formattedOriginalPrice(): string {
    return this.originalPrice.toLocaleString('en-US');
  }
  
  toggleFavorite(): void {
    if (this.quiz) {
      this.favoritesService.toggle(this.quiz);
    }
  }

  goToQuiz(id: number): void {
    this.router.navigate(['/quiz', id]);
  }
}
