import {
  BannerComponent,
  SharedModule
} from "./chunk-CBGNQ3LD.js";
import "./chunk-TIREVR5C.js";
import {
  ScrollTopService
} from "./chunk-44CRMYI5.js";
import "./chunk-XOE3LYJN.js";
import {
  PagesService
} from "./chunk-F6AG6VOS.js";
import {
  CommonModule,
  NgForOf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AB3KI4M6.js";

// src/app/view/faq/faq.component.ts
function FaqComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "p", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.question, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", item_r1.answer, \u0275\u0275sanitizeHtml);
  }
}
var FaqComponent = class _FaqComponent {
  scrollTop;
  pagesService;
  quizCount = 0;
  page = null;
  banner = null;
  // Удобные геттеры для передачи в дочерние компоненты
  get privacyData() {
    return this.page?.content?.["faq"];
  }
  constructor(scrollTop, pagesService) {
    this.scrollTop = scrollTop;
    this.pagesService = pagesService;
  }
  ngOnInit() {
    this.scrollTop.toTop();
    const stored = localStorage.getItem("quizCount");
    this.quizCount = stored ? Number(stored) : 0;
    this.pagesService.getFaq().subscribe((page) => {
      this.page = page;
    });
    this.pagesService.getHome().subscribe((page) => {
      this.banner = page;
    });
  }
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)(\u0275\u0275directiveInject(ScrollTopService), \u0275\u0275directiveInject(PagesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 9, vars: 5, consts: [[3, "quizCount", "page"], [1, "container", "flex", "flex-col-reverse", "justify-center", "items-center"], [1, "max-w-screen-xl", "p-8", "mx-auto", "bg-shadow", "mt-[50px]", "md:mt-[60px]", "mb-[40px]", "text-pretty", "w-full"], [1, "md:text-center", "text-pretty", "mb-2", "text-lg", "md:text-2xl", "font-extrabold", "md:leading-9", "text-white-50", "text-center"], [1, "md:text-center", "text-center", "mb-10", "text-md", "md:text-xl", "font-extrabold", "md:leading-6", "opacity-70", "text-balance"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "items-center", "gap-6", "md:gap-8"], ["class", "w-full", 4, "ngFor", "ngForOf"], [1, "w-full"], [1, "text-lg", "font-medium", "leading-6", "text-white-50"], [1, "mt-2"], [1, "text-base", "leading-6", "text-gray-500", 3, "innerHTML"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-banner", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ul", 5);
      \u0275\u0275template(8, FaqComponent_li_8_Template, 5, 2, "li", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("quizCount", ctx.quizCount)("page", ctx.banner);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["privacy"] == null ? null : ctx.page.content["privacy"].title) || "Privacy Policy", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["privacy"] == null ? null : ctx.page.content["privacy"].subtitle) || "Here you can manage the website's cookies and non-essential data processing. Essential items are always enabled to ensure the site operates securely.", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["privacy"] == null ? null : ctx.page.content["privacy"].faq);
    }
  }, dependencies: [NgForOf, BannerComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent" });
})();

// src/app/view/faq/faq.module.ts
var routes = [
  { path: "", component: FaqComponent }
];
var FaqModule = class _FaqModule {
  static \u0275fac = function FaqModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FaqModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ] });
};
export {
  FaqModule
};
//# sourceMappingURL=chunk-GJPNRYHM.js.map
