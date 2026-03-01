import {
  QuizService
} from "./chunk-TCNXBHNC.js";
import {
  BannerComponent,
  SharedModule
} from "./chunk-CBGNQ3LD.js";
import {
  FavoritesService,
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
  PagesService
} from "./chunk-F6AG6VOS.js";
import {
  ChangeDetectorRef,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  RouterLink,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AB3KI4M6.js";

// src/app/view/quiz-list/quiz-list/quiz-list.component.ts
var _c0 = (a0) => ({ "h-space": a0 });
var _c1 = (a0) => ["/quiz", a0];
var _c2 = () => [1, 2, 3, 4, 5];
var _c3 = (a0) => ({ filled: a0 });
function QuizListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "app-banner", 4);
    \u0275\u0275listener("close", function QuizListComponent_ng_container_0_Template_app_banner_close_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideBanner());
    })("showAll", function QuizListComponent_ng_container_0_Template_app_banner_showAll_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAllQuizzes());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("quizCount", ctx_r1.quizzes.length)("page", ctx_r1.page);
  }
}
function QuizListComponent_ng_container_2_div_3_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const quiz_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate("alt", quiz_r4.title);
    \u0275\u0275property("src", quiz_r4.previewImage, \u0275\u0275sanitizeUrl);
  }
}
function QuizListComponent_ng_container_2_div_3_input_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 24);
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const quiz_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("name", "rating-", quiz_r4.id, "");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c3, i_r5 < (quiz_r4.rating || 0)));
  }
}
function QuizListComponent_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 9);
    \u0275\u0275listener("click", function QuizListComponent_ng_container_2_div_3_Template_button_click_1_listener($event) {
      const quiz_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFavClick($event, quiz_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "figure");
    \u0275\u0275template(5, QuizListComponent_ng_container_2_div_3_img_5_Template, 1, 2, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9, "sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275template(11, QuizListComponent_ng_container_2_div_3_input_11_Template, 1, 5, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h2", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h2", 18);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 19)(17, "button", 20)(18, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 21);
    \u0275\u0275element(20, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(21, " Buy Now \u{1F929} ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const quiz_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, quiz_r4.id));
    \u0275\u0275attribute("data-gtm-quiz-id", quiz_r4.id)("data-gtm-title", quiz_r4.title)("data-gtm-action", "click_card");
    \u0275\u0275advance();
    \u0275\u0275classProp("border-red-600", ctx_r1.favoritesService.isFavorite(quiz_r4.id))("text-red-400", ctx_r1.favoritesService.isFavorite(quiz_r4.id))("border-zinc-600", !ctx_r1.favoritesService.isFavorite(quiz_r4.id))("text-zinc-400", !ctx_r1.favoritesService.isFavorite(quiz_r4.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", ctx_r1.favoritesService.isFavorite(quiz_r4.id) ? "currentColor" : "none");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", quiz_r4.previewImage);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(19, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(quiz_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", quiz_r4.titleAdm, "$ ");
  }
}
function QuizListComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6);
    \u0275\u0275template(3, QuizListComponent_ng_container_2_div_3_Template, 22, 20, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("@listAnimation", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredQuizzes);
  }
}
function QuizListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "span", 26)(2, "span", 27);
    \u0275\u0275elementEnd();
  }
}
var QuizListComponent = class _QuizListComponent {
  quizService;
  cdr;
  scrollTop;
  pagesService;
  favoritesService;
  quizzes = [];
  isvisible = true;
  filteredQuizzes = [];
  showAll = false;
  page = null;
  constructor(quizService, cdr, scrollTop, pagesService, favoritesService) {
    this.quizService = quizService;
    this.cdr = cdr;
    this.scrollTop = scrollTop;
    this.pagesService = pagesService;
    this.favoritesService = favoritesService;
  }
  ngOnInit() {
    this.scrollTop.toTop();
    this.loadQuizzes();
    this.pagesService.getHome().subscribe((page) => {
      this.page = page;
    });
  }
  loadQuizzes() {
    this.quizService.getQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data.filter((q) => q.isActive);
        this.updateFilteredQuizzes();
      },
      error: (err) => console.error("\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u0432\u0438\u0437\u043E\u0432:", err)
    });
  }
  updateFilteredQuizzes() {
    console.log("\u0412\u0441\u0435 \u043A\u0432\u0438\u0437\u044B:", this.quizzes);
    if (this.showAll) {
      this.filteredQuizzes = [...this.quizzes];
      console.log("\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0412\u0421\u0415:", this.filteredQuizzes.length);
    } else {
      this.filteredQuizzes = this.quizzes.filter((q) => {
        const show = !!q.isMainView;
        console.log(`\u041A\u0432\u0438\u0437 "${q.title}" \u2192 isMainView =`, q.isMainView, "\u2192 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C?", show);
        return show;
      });
      console.log("\u041F\u043E\u0441\u043B\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 isMainView:", this.filteredQuizzes.length);
    }
    this.cdr.markForCheck();
  }
  showAllQuizzes() {
    this.showAll = true;
    this.updateFilteredQuizzes();
    this.hideBanner();
  }
  hideBanner() {
    this.isvisible = false;
  }
  onFavClick(event, quiz) {
    event.stopPropagation();
    this.favoritesService.toggle(quiz);
  }
  static \u0275fac = function QuizListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizListComponent)(\u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ScrollTopService), \u0275\u0275directiveInject(PagesService), \u0275\u0275directiveInject(FavoritesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizListComponent, selectors: [["app-quiz-list"]], decls: 5, vars: 6, consts: [["loading", ""], [4, "ngIf"], [1, "quiz-list", "mx-w-1200", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [3, "close", "showAll", "quizCount", "page"], [1, "bg-gradient-to-b", "from-zinc-950", "via-red-900/50", "to-zinc-950", "rounded-box", "py-0", "md:py-5"], [1, "quiz-list-wrapper", "grid", "grid-cols-1", "lg:grid-cols-3"], ["class", "card quiz-item bg-card-gradient max-w-[450px] mx-auto w-full", "data-gtm-card", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["data-gtm-card", "", 1, "card", "quiz-item", "bg-card-gradient", "max-w-[450px]", "mx-auto", "w-full", 3, "routerLink"], ["title", "Add to Favorites", 1, "btn", "btn-circle", "btn-sm", "bg-transparent", "border", "transition", "absolute", "right-2", "top-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [3, "src", "alt", 4, "ngIf"], [1, "card-body", "relative"], [1, "card-body-header", "flex", "justify-between", "items-center"], [1, "text-sm", "text-zinc-400", "badge", "bg-red-v"], [1, "rating"], ["type", "radio", "class", "mask mask-star bg-red-v w-[15px] h-[15px]", 3, "name", "ngClass", 4, "ngFor", "ngForOf"], [1, "card-title"], [1, "card-actions", "justify-between", "items-center", "card-footer"], [1, "btn", "btn-accent", "btn-card", "text-base-200"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 24 24", 1, "h-10", "w-10", "fill-current"], ["d", "M8 5v14l11-7z"], [3, "src", "alt"], ["type", "radio", 1, "mask", "mask-star", "bg-red-v", "w-[15px]", "h-[15px]", 3, "name", "ngClass"], [1, "loading-container", "text-center", "h-screen"], [1, "loading", "loading-ring", "text-red-400", "loading-xl"], [1, "loading", "loading-ring", "text-red-900", "loading-md"]], template: function QuizListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, QuizListComponent_ng_container_0_Template, 2, 2, "ng-container", 1);
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275template(2, QuizListComponent_ng_container_2_Template, 4, 2, "ng-container", 3)(3, QuizListComponent_ng_template_3_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loading_r6 = \u0275\u0275reference(4);
      \u0275\u0275property("ngIf", ctx.isvisible);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, !ctx.isvisible));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.quizzes == null ? null : ctx.quizzes.length)("ngIfElse", loading_r6);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, BannerComponent, RouterLink], styles: ["\n\n.quiz-list[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.quiz-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  overflow: hidden;\n}\n.quiz-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow:\n    0 0 2em red,\n    0 0 3em white,\n    0 0 6em whitesmoke;\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n  z-index: 1;\n}\n.quiz-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n  transition: 0.1s ease-in-out;\n}\n.quiz-list[_ngcontent-%COMP%]   .quiz-list-wrapper[_ngcontent-%COMP%] {\n  gap: 10px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 40px 40px;\n}\n.quiz-list[_ngcontent-%COMP%]   .quiz-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: top;\n  width: 100%;\n  height: 300px;\n}\n.quiz-list[_ngcontent-%COMP%]   .quiz-item[_ngcontent-%COMP%] {\n  flex: 33%;\n}\n.quiz-list[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0 0 15px 15px;\n}\n.quiz-list[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active:focus {\n  transform: none;\n}\n.quiz-list[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  aspect-ratio: auto;\n}\n@media (max-width: 1024px) {\n  .quiz-list[_ngcontent-%COMP%]   .quiz-list-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n}\n/*# sourceMappingURL=quiz-list.component.css.map */"], data: { animation: [
    trigger("listAnimation", [
      transition(":enter", [
        query(".quiz-item", [
          style({ opacity: 0, transform: "translateY(20px)" }),
          stagger(100, [
            animate("500ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
          ])
        ], { optional: true })
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizListComponent, { className: "QuizListComponent" });
})();

// src/app/view/quiz-list/quiz-list.module.ts
var routes = [
  { path: "", component: QuizListComponent }
];
var QuizListModule = class _QuizListModule {
  static \u0275fac = function QuizListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizListModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _QuizListModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ] });
};

export {
  QuizListModule
};
//# sourceMappingURL=chunk-GYT2UE5F.js.map
