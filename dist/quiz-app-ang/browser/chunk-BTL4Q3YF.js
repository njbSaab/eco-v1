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
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-AB3KI4M6.js";

// src/app/view/police/police/police.component.ts
function PoliceComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-shadow-red", card_r1.color === "fuchsia" || i_r2 % 3 === 0)("bg-shadow-pearl", card_r1.color === "center" || i_r2 % 3 === 1)("bg-shadow-graphite", card_r1.color === "cayn" || i_r2 % 3 === 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", card_r1.color === "fuchsia" || i_r2 % 3 === 0)("text-zinc-100", card_r1.color === "center" || i_r2 % 3 === 1)("text-zinc-400", card_r1.color === "cayn" || i_r2 % 3 === 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", card_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.replaceEmail(card_r1.body), \u0275\u0275sanitizeHtml);
  }
}
var PoliceComponent = class _PoliceComponent {
  pagesService;
  scrollTop;
  page = null;
  banner = null;
  quizCount = 0;
  constructor(pagesService, scrollTop) {
    this.pagesService = pagesService;
    this.scrollTop = scrollTop;
  }
  ngOnInit() {
    this.scrollTop.toTop();
    const stored = localStorage.getItem("quizCount");
    this.quizCount = stored ? Number(stored) : 0;
    this.pagesService.getPage("policy").subscribe((page) => {
      this.page = page;
    });
    this.pagesService.getHome().subscribe((page) => {
      this.banner = page;
    });
  }
  get data() {
    return this.page?.content?.["policy"];
  }
  // Заменяем {{email}} на реальный email
  replaceEmail(text) {
    if (!text)
      return "";
    return text.replace("{{email}}", this.data?.email || "privacy@votevibe.club");
  }
  static \u0275fac = function PoliceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoliceComponent)(\u0275\u0275directiveInject(PagesService), \u0275\u0275directiveInject(ScrollTopService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PoliceComponent, selectors: [["app-police"]], decls: 13, vars: 7, consts: [[3, "quizCount", "page"], [1, "bg-gradient-blue-180"], [1, "mx-auto", "max-w-screen-xl", "px-4", "py-8", "sm:px-6", "sm:pb-12", "sm:pt-8", "lg:px-8", "lg:pb-16", "lg:pt-8"], [1, "mx-auto", "max-w-lg", "text-center"], [1, "text-2xl", "capitalize", "lg:text-3xl", "font-semibold", "tracking-tight", "cursor-pointer", "text-center"], [1, "bg-gradient-to-r", "from-zinc-200", "via-red-500", "to-zinc-100", "bg-clip-text", "text-transparent"], [1, "mt-[10px]", "md:mt-4", "text-gray-300"], [1, "mt-8", "grid", "grid-cols-1", "gap-8", "md:grid-cols-2", "lg:grid-cols-3"], ["class", "bg-gradient-blue-180 block rounded-xl p-8 shadow-xl transition hover:shadow-red-700/50 hover:shadow-2xl", "href", "javascript:void(0)", 3, "bg-shadow-red", "bg-shadow-pearl", "bg-shadow-graphite", 4, "ngFor", "ngForOf"], [1, "w-fit", "mx-auto", "mt-8", "flex", "items-center", "justify-center", "rounded-2xl", "px-5", "py-3", "text-sm", "sm:text-base", "font-semibold", "bg-gradient-to-r", "from-zinc-900", "via-red-700", "to-zinc-800", "text-white", "shadow-lg", "shadow-red-700/30", "hover:opacity-95", "transition", 3, "routerLink"], ["href", "javascript:void(0)", 1, "bg-gradient-blue-180", "block", "rounded-xl", "p-8", "shadow-xl", "transition", "hover:shadow-red-700/50", "hover:shadow-2xl"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "size-10"], ["fill", "currentColor", "d", "M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm2.5 11.59l.9 3.88l-3.4-2.05l-3.4 2.05l.9-3.87l-3-2.59l3.96-.34L12 6.02l1.54 3.64l3.96.34z"], [1, "mt-4", "text-xl", "font-bold", "text-white"], [1, "mt-1", "text-sm", "text-gray-300", 3, "innerHTML"]], template: function PoliceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-banner", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4)(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275template(10, PoliceComponent_a_10_Template, 6, 14, "a", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("quizCount", ctx.quizCount)("page", ctx.banner);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", (ctx.data == null ? null : ctx.data.title) || "About Us...", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data == null ? null : ctx.data.subtitle, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.data == null ? null : ctx.data.cards);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", (ctx.data == null ? null : ctx.data.ctaLink) || "/quiz/3");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.data == null ? null : ctx.data.ctaText) || "Shop Now...", " ");
    }
  }, dependencies: [NgForOf, RouterLink, BannerComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PoliceComponent, { className: "PoliceComponent" });
})();

// src/app/view/police/police.module.ts
var routes = [
  { path: "", component: PoliceComponent }
];
var PoliceModule = class _PoliceModule {
  static \u0275fac = function PoliceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoliceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PoliceModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ] });
};
export {
  PoliceModule
};
//# sourceMappingURL=chunk-BTL4Q3YF.js.map
