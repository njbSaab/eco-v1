import {
  ScrollTopService
} from "./chunk-44CRMYI5.js";
import {
  PagesService
} from "./chunk-F6AG6VOS.js";
import {
  CommonModule,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-AB3KI4M6.js";

// src/app/view/terms/terms/terms.component.ts
var _c0 = ["collapse"];
var _c1 = () => [0, 3, 6, 9];
var _c2 = () => [1, 4, 7, 10];
var _c3 = () => [2, 5, 8, 11];
function TermsComponent_div_11_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "br")(2, "br");
    \u0275\u0275text(3, " If you have any questions, please feel free to contact us: ");
    \u0275\u0275elementStart(4, "a", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "mailto:" + ((ctx_r1.page == null ? null : ctx_r1.page.content == null ? null : ctx_r1.page.content["terms"] == null ? null : ctx_r1.page.content["terms"].email) || "privacy@votevibe.club"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.page == null ? null : ctx_r1.page.content == null ? null : ctx_r1.page.content["terms"] == null ? null : ctx_r1.page.content["terms"].email) || "privacy@votevibe.club", " ");
  }
}
function TermsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11, 0)(2, "input", 12);
    \u0275\u0275listener("change", function TermsComponent_div_11_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCollapseChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275element(6, "span", 15);
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275template(9, TermsComponent_div_11_ng_container_9_Template, 6, 2, "ng-container", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const isFirst_r5 = ctx.first;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("card-border-red", \u0275\u0275pureFunction0(17, _c1).includes(i_r4))("card-border-white", \u0275\u0275pureFunction0(18, _c2).includes(i_r4))("card-border-graphite", \u0275\u0275pureFunction0(19, _c3).includes(i_r4));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-index", i_r4)("checked", isFirst_r5 ? true : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-red-500", \u0275\u0275pureFunction0(20, _c1).includes(i_r4))("border-zinc-100", \u0275\u0275pureFunction0(21, _c2).includes(i_r4))("border-zinc-500", \u0275\u0275pureFunction0(22, _c3).includes(i_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.body, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 === ((tmp_15_0 = ctx_r1.page == null ? null : ctx_r1.page.content == null ? null : ctx_r1.page.content["terms"] == null ? null : ctx_r1.page.content["terms"].collapse == null ? null : ctx_r1.page.content["terms"].collapse.length) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 0) - 1);
  }
}
var TermsComponent = class _TermsComponent {
  pagesService;
  scrollTop;
  collapses;
  page = null;
  constructor(pagesService, scrollTop) {
    this.pagesService = pagesService;
    this.scrollTop = scrollTop;
  }
  ngOnInit() {
    this.scrollTop.toTop();
    this.pagesService.getPage("terms").subscribe((page) => {
      this.page = page;
      setTimeout(() => this.updateBgClasses());
    });
  }
  ngAfterViewInit() {
    this.updateBgClasses();
    this.collapses.changes.subscribe(() => {
      this.updateBgClasses();
    });
  }
  // Это ВАЖНЫЙ обработчик — он срабатывает на нативное изменение radio
  onCollapseChange(event) {
    const input = event.target;
    const indexStr = input.getAttribute("data-index");
    if (!indexStr)
      return;
    const index = parseInt(indexStr, 10);
    const shadowClass = this.getShadowClass(index);
    this.collapses.forEach((el) => {
      const div = el.nativeElement;
      div.classList.remove("bg-shadow-cayn", "bg-shadow-center", "bg-shadow-fuchsia");
    });
    const activeCollapse = input.closest(".collapse");
    if (activeCollapse) {
      activeCollapse.classList.add(shadowClass);
    }
  }
  getShadowClass(index) {
    const classes = ["bg-shadow-cayn", "bg-shadow-center", "bg-shadow-fuchsia"];
    return classes[index % 3];
  }
  updateBgClasses() {
    if (!this.collapses)
      return;
    this.collapses.forEach((el, index) => {
      const div = el.nativeElement;
      const input = div.querySelector('input[type="radio"]');
      div.classList.remove("bg-shadow-cayn", "bg-shadow-center", "bg-shadow-fuchsia");
      if (input?.checked || index === 0) {
        div.classList.add(this.getShadowClass(index));
      }
    });
  }
  static \u0275fac = function TermsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermsComponent)(\u0275\u0275directiveInject(PagesService), \u0275\u0275directiveInject(ScrollTopService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermsComponent, selectors: [["app-terms"]], viewQuery: function TermsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.collapses = _t);
    }
  }, decls: 12, vars: 3, consts: [["collapse", ""], [1, "h-space", "mb-8"], [1, "absolute", "inset-0", "-z-10"], [1, "absolute", "-top-40", "left-1/2", "-translate-x-1/2", "h-[32rem]", "w-full", "lg:w-[32rem]", "rounded-full", "blur-3xl", "opacity-20", 2, "background", "radial-gradient(closest-side, #dc2626, transparent 70%)"], [1, "absolute", "top-40", "right-10", "h-64", "w-64", "rounded-full", "blur-3xl", "opacity-25", 2, "background", "radial-gradient(closest-side, #6b7280, transparent 70%)"], [1, "container", "max-w-[850px]", "px-6", "py-10", "mx-auto"], [1, "text-2xl", "lg:text-3xl", "font-semibold", "text-center"], [1, "bg-gradient-to-r", "from-zinc-200", "via-red-500", "to-zinc-100", "bg-clip-text", "text-transparent"], [1, "text-md", "lg:text-xl", "text-center", "text-white", "opacity-70", "w-[80%]", "mx-auto", "mt-4"], [1, "mt-8", "flex", "flex-col", "gap-4"], ["class", "collapse collapse-arrow border rounded-box", 3, "card-border-red", "card-border-white", "card-border-graphite", 4, "ngFor", "ngForOf"], [1, "collapse", "collapse-arrow", "border", "rounded-box"], ["type", "radio", "name", "terms-accordion", 3, "change"], [1, "collapse-title", "text-xl", "font-medium"], [1, "collapse-content", "flex", "gap-2"], [1, "border", "ml-4"], [1, "text-gray-500", "dark:text-gray-300"], [4, "ngIf"], [1, "link", "link-info", 3, "href"]], template: function TermsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2);
      \u0275\u0275element(2, "div", 3)(3, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "h2", 6)(6, "span", 7);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275template(11, TermsComponent_div_11_Template, 10, 23, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["terms"] == null ? null : ctx.page.content["terms"].title) || "Terms of Service...", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["terms"] == null ? null : ctx.page.content["terms"].subtitle) || "Here you can manage the website's cookies and non-essential data processing purposes. Essential items will always remain enabled to ensure the secure operation of the site...", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["terms"] == null ? null : ctx.page.content["terms"].collapse);
    }
  }, dependencies: [NgForOf, NgIf], styles: ["\n\n.about[_ngcontent-%COMP%] {\n  padding-top: 80px;\n}\n.collapse[_ngcontent-%COMP%]:has(input[type=radio]:checked).card-border-red {\n  box-shadow:\n    0 0 2em #ef4444,\n    0 0 6em #dc2626,\n    0 0 12em #7f1d1d !important;\n}\n.collapse[_ngcontent-%COMP%]:has(input[type=radio]:checked).card-border-white {\n  box-shadow:\n    0 0 2em #f4f4f5,\n    0 0 6em #d4d4d8,\n    0 0 12em #a1a1aa !important;\n}\n.collapse[_ngcontent-%COMP%]:has(input[type=radio]:checked).card-border-graphite {\n  box-shadow:\n    0 0 2em #71717a,\n    0 0 6em #52525b,\n    0 0 12em #3f3f46 !important;\n}\n/*# sourceMappingURL=terms.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermsComponent, { className: "TermsComponent" });
})();

// src/app/view/terms/terms.module.ts
var routes = [
  { path: "", component: TermsComponent }
];
var TermsModule = class _TermsModule {
  static \u0275fac = function TermsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TermsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ] });
};
export {
  TermsModule
};
//# sourceMappingURL=chunk-AO7QG34E.js.map
