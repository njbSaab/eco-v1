import {
  QuizService
} from "./chunk-TCNXBHNC.js";
import {
  CartModalService,
  CartService,
  FavoritesService,
  LightboxService,
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-TIREVR5C.js";
import {
  ScrollTopService
} from "./chunk-44CRMYI5.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AB3KI4M6.js";

// src/app/view/quiz-single/quiz-single/quiz-single.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ({ filled: a0 });
function QuizSingleComponent_div_0_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.quiz.previewImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.quiz.title);
  }
}
function QuizSingleComponent_div_0_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.quiz.previewImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.quiz.title);
  }
}
function QuizSingleComponent_div_0_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.quiz.previewImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.quiz.title);
  }
}
function QuizSingleComponent_div_0_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.quiz.previewImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.quiz.title);
  }
}
function QuizSingleComponent_div_0_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.quiz.previewImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.quiz.title);
  }
}
function QuizSingleComponent_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "circle", 32)(3, "line", 33)(4, "line", 34)(5, "line", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.galleryImages.length > 1 ? ctx_r1.galleryImages.length + " photos" : "View", " ");
  }
}
function QuizSingleComponent_div_0_div_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function QuizSingleComponent_div_0_div_11_button_1_Template_button_click_0_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openLightbox(i_r4));
    });
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const src_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", src_r5, \u0275\u0275sanitizeUrl)("alt", ctx_r1.quiz.title + " photo " + (i_r4 + 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
  }
}
function QuizSingleComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, QuizSingleComponent_div_0_div_11_button_1_Template, 4, 3, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.galleryImages);
  }
}
function QuizSingleComponent_div_0_input_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 42);
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate1("name", "rating-", ctx_r1.quiz.id, "");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c1, i_r6 < (ctx_r1.quiz.rating || 0)));
  }
}
function QuizSingleComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275text(6, " \u221220% ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quiz.titleAdm, "$ ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (+ctx_r1.quiz.titleAdm * 1.2).toFixed(0), "$ ");
  }
}
function QuizSingleComponent_div_0_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.quiz.description, " ");
  }
}
function QuizSingleComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "h3", 49);
    \u0275\u0275element(2, "span", 50);
    \u0275\u0275text(3, " Product Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r1.quiz.firstPage, \u0275\u0275sanitizeHtml);
  }
}
function QuizSingleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "figure", 6);
    \u0275\u0275listener("click", function QuizSingleComponent_div_0_Template_figure_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLightbox(0));
    });
    \u0275\u0275template(5, QuizSingleComponent_div_0_img_5_Template, 1, 2, "img", 7)(6, QuizSingleComponent_div_0_img_6_Template, 1, 2, "img", 7)(7, QuizSingleComponent_div_0_img_7_Template, 1, 2, "img", 7)(8, QuizSingleComponent_div_0_img_8_Template, 1, 2, "img", 7)(9, QuizSingleComponent_div_0_img_9_Template, 1, 2, "img", 7)(10, QuizSingleComponent_div_0_span_10_Template, 8, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, QuizSingleComponent_div_0_div_11_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14, " New Arrival ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h1", 12)(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 15);
    \u0275\u0275template(20, QuizSingleComponent_div_0_input_20_Template, 1, 5, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, QuizSingleComponent_div_0_div_24_Template, 7, 2, "div", 18);
    \u0275\u0275element(25, "div", 19);
    \u0275\u0275template(26, QuizSingleComponent_div_0_p_26_Template, 2, 1, "p", 20)(27, QuizSingleComponent_div_0_div_27_Template, 5, 1, "div", 21);
    \u0275\u0275elementStart(28, "div", 22)(29, "button", 23);
    \u0275\u0275listener("click", function QuizSingleComponent_div_0_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 24);
    \u0275\u0275element(31, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "button", 26);
    \u0275\u0275listener("click", function QuizSingleComponent_div_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 27);
    \u0275\u0275element(35, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("@blurIn", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.quiz.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.galleryImages.length > 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quiz.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(27, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 25, ctx_r1.quiz.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.quiz.titleAdm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.quiz.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.quiz.firstPage);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cartService.isInCart(ctx_r1.quiz.id) ? "In Cart \u2713" : "Add to Cart", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-red-600", ctx_r1.favoritesService.isFavorite(ctx_r1.quiz.id))("text-red-400", ctx_r1.favoritesService.isFavorite(ctx_r1.quiz.id))("border-zinc-600", !ctx_r1.favoritesService.isFavorite(ctx_r1.quiz.id))("text-zinc-300", !ctx_r1.favoritesService.isFavorite(ctx_r1.quiz.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r1.favoritesService.isFavorite(ctx_r1.quiz.id) ? "currentColor" : "none");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.favoritesService.isFavorite(ctx_r1.quiz.id) ? "Saved \u2665" : "Wishlist", " ");
  }
}
function QuizSingleComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "span", 53)(2, "span", 54);
    \u0275\u0275elementEnd();
  }
}
var QuizSingleComponent = class _QuizSingleComponent {
  route;
  quizService;
  scrollTop;
  cartService;
  favoritesService;
  cartModalService;
  lightboxService;
  quiz = null;
  constructor(route, quizService, scrollTop, cartService, favoritesService, cartModalService, lightboxService) {
    this.route = route;
    this.quizService = quizService;
    this.scrollTop = scrollTop;
    this.cartService = cartService;
    this.favoritesService = favoritesService;
    this.cartModalService = cartModalService;
    this.lightboxService = lightboxService;
  }
  ngOnInit() {
    this.scrollTop.toTop();
    const id = this.route.snapshot.paramMap.get("id");
    if (id)
      this.loadQuiz(+id);
  }
  loadQuiz(id) {
    this.quizService.getQuizById(id).subscribe({
      next: (quiz) => {
        this.quiz = quiz || null;
      },
      error: (err) => {
        console.error("Failed to load product:", err);
      }
    });
  }
  /** All product images: quiz.images[] if present, else mock ×5 for dev */
  get galleryImages() {
    if (this.quiz?.images?.length)
      return this.quiz.images;
    if (this.quiz?.previewImage)
      return Array(5).fill(this.quiz.previewImage);
    return [];
  }
  openLightbox(index = 0) {
    const imgs = this.galleryImages;
    if (!imgs.length)
      return;
    this.lightboxService.open(imgs, index, this.quiz?.title ?? "");
  }
  addToCart() {
    if (this.quiz) {
      this.cartService.add(this.quiz);
      this.cartModalService.open("cart");
    }
  }
  toggleFavorite() {
    if (this.quiz) {
      this.favoritesService.toggle(this.quiz);
    }
  }
  static \u0275fac = function QuizSingleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizSingleComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(ScrollTopService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(FavoritesService), \u0275\u0275directiveInject(CartModalService), \u0275\u0275directiveInject(LightboxService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizSingleComponent, selectors: [["app-quiz-single"]], decls: 3, vars: 2, consts: [["notFound", ""], ["class", "quiz-detail h-space", 4, "ngIf", "ngIfElse"], [1, "quiz-detail", "h-space"], [1, "max-w-5xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-10", "lg:gap-16", "items-start", "mt-4", "mb-8"], [1, "flex", "flex-col", "gap-4"], ["title", "Click to view gallery", 1, "relative", "img-stack-wrapper", "img-stack-clickable", 3, "click"], ["class", "rounded-2xl", 3, "src", "alt", 4, "ngIf"], ["class", "img-zoom-badge", 4, "ngIf"], ["class", "thumb-strip", 4, "ngIf"], [1, "flex", "flex-col", "gap-5"], [1, "w-fit", "text-xs", "font-semibold", "tracking-widest", "uppercase", "px-3", "py-1", "rounded-full", "bg-red-900/30", "border", "border-red-700/40", "text-red-400"], [1, "text-3xl", "lg:text-4xl", "font-bold", "leading-tight"], [1, "bg-gradient-to-r", "from-red-900", "via-red-400", "to-red-800", "bg-clip-text", "text-transparent"], [1, "flex", "items-center", "gap-4", "flex-wrap"], [1, "rating", "rating-sm"], ["type", "radio", "class", "mask mask-star bg-red-v", 3, "name", "ngClass", 4, "ngFor", "ngForOf"], [1, "text-zinc-400", "text-sm"], ["class", "flex items-baseline gap-2", 4, "ngIf"], [1, "h-px", "bg-gradient-to-r", "from-transparent", "via-red-800/50", "to-transparent"], ["class", "text-zinc-300 leading-relaxed text-base", 4, "ngIf"], ["class", "rounded-xl border border-zinc-700/50 bg-zinc-900/60 p-5 text-sm text-zinc-300 leading-relaxed", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "pt-2"], [1, "flex-1", "inline-flex", "items-center", "justify-center", "gap-2", "rounded-2xl", "px-6", "py-3", "font-semibold", "bg-gradient-to-r", "from-zinc-900", "via-red-700", "to-zinc-800", "text-white", "shadow-lg", "shadow-red-700/30", "hover:opacity-90", "transition", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-5", "h-5"], ["d", "M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.5 6H21l-1.68 8.39c-.16.8-.87 1.61-1.85 1.61H8.55c-.99 0-1.7-.82-1.85-1.62L5.5 6zM3 2H1v2h2l3.6 7.59L5.25 14A2 2 0 0 0 7 17h14v-2H7.42a.25.25 0 0 1-.25-.25l.03-.12L8.1 13h9.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21L4.27 2H3z"], [1, "inline-flex", "items-center", "justify-center", "gap-2", "rounded-2xl", "px-6", "py-3", "font-semibold", "border", "transition", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "rounded-2xl", 3, "src", "alt"], [1, "img-zoom-badge"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["x1", "11", "y1", "8", "x2", "11", "y2", "14"], ["x1", "8", "y1", "11", "x2", "14", "y2", "11"], [1, "img-zoom-badge__label"], [1, "thumb-strip"], ["class", "thumb-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "thumb-item", 3, "click"], [3, "src", "alt"], [1, "thumb-index"], ["type", "radio", 1, "mask", "mask-star", "bg-red-v", 3, "name", "ngClass"], [1, "flex", "items-baseline", "gap-2"], [1, "text-4xl", "font-bold", "bg-gradient-to-r", "from-red-400", "via-red-300", "to-red-500", "bg-clip-text", "text-transparent", "tracking-tight"], [1, "text-sm", "text-zinc-500", "line-through"], [1, "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-red-900/30", "border", "border-red-700/40", "text-red-400", "ml-1"], [1, "text-zinc-300", "leading-relaxed", "text-base"], [1, "rounded-xl", "border", "border-zinc-700/50", "bg-zinc-900/60", "p-5", "text-sm", "text-zinc-300", "leading-relaxed"], [1, "text-white", "font-semibold", "mb-3", "flex", "items-center", "gap-2"], [1, "inline-block", "w-1", "h-4", "rounded-full", "bg-red-600"], [3, "innerHTML"], [1, "loading-container", "text-center", "h-screen", "flex", "flex-col", "items-center", "justify-center", "gap-2"], [1, "loading", "loading-ring", "text-red-500", "loading-xl"], [1, "loading", "loading-ring", "text-red-900", "loading-md"]], template: function QuizSingleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, QuizSingleComponent_div_0_Template, 37, 28, "div", 1)(1, QuizSingleComponent_ng_template_1_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const notFound_r7 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.quiz)("ngIfElse", notFound_r7);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n.quiz-detail.h-space[_ngcontent-%COMP%] {\n  padding-top: 118px;\n}\n.img-wrapper[_ngcontent-%COMP%] {\n  height: 360px;\n  position: relative;\n}\n.img-stack-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: visible;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: all 0.5s ease;\n  top: 0;\n  width: 100%;\n  aspect-ratio: 3/4;\n  object-fit: cover;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(-8deg);\n  z-index: 10;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(-4deg);\n  z-index: 9;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(0deg);\n  z-index: 8;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(4deg);\n  z-index: 7;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(8deg);\n  z-index: 6;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: rotate(0);\n  opacity: 1;\n  scale: 1.04;\n  box-shadow: 0 0 2em rgba(185, 28, 28, 0.3764705882), 0 0 5em rgba(127, 29, 29, 0.2509803922);\n}\n.img-stack-clickable[_ngcontent-%COMP%] {\n  cursor: zoom-in;\n}\n.img-zoom-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 14px;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 10px 5px 7px;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  color: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgba(220, 38, 38, 0.4);\n  opacity: 0;\n  transform: translateY(4px);\n  transition: opacity 220ms, transform 220ms;\n  pointer-events: none;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.03em;\n}\n.img-stack-wrapper[_ngcontent-%COMP%]:hover   .img-zoom-badge[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.img-zoom-badge__label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.thumb-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding-top: 8px;\n}\n.thumb-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 2px solid #27272a;\n  cursor: pointer;\n  transition: border-color 200ms, transform 200ms;\n  background: #18181b;\n  flex-shrink: 0;\n}\n.thumb-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: opacity 200ms;\n}\n.thumb-item[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  transform: translateY(-2px);\n}\n.thumb-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.thumb-index[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 5px;\n  font-size: 10px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n  line-height: 1;\n}\n.filled[_ngcontent-%COMP%] {\n  background: #dc2626 !important;\n}\n.bg-red-v[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1333333333);\n}\n@media (max-width: 768px) {\n  .quiz-detail.h-space[_ngcontent-%COMP%] {\n    padding-top: 100px;\n  }\n  .img-wrapper[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n  .thumb-item[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=quiz-single.component.css.map */'], data: { animation: [
    trigger("blurIn", [
      transition(":enter", [
        query(".rounded-2xl", [
          style({ opacity: 0, filter: "blur(10px)" }),
          stagger(150, [
            animate("700ms ease-in-out", style({ opacity: 1, filter: "blur(0px)" }))
          ])
        ], { optional: true })
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizSingleComponent, { className: "QuizSingleComponent" });
})();

// src/app/view/quiz-single/quiz-single.module.ts
var routes = [
  { path: "", component: QuizSingleComponent }
];
var QuizSingleModule = class _QuizSingleModule {
  static \u0275fac = function QuizSingleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizSingleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _QuizSingleModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    // Импортируем CommonModule для структурных директив
    RouterModule.forChild(routes),
    RouterModule
  ] });
};

export {
  QuizSingleModule
};
//# sourceMappingURL=chunk-DFHIUJGO.js.map
