import {
  SharedModule
} from "./chunk-CBGNQ3LD.js";
import {
  ScrollTopService
} from "./chunk-44CRMYI5.js";
import {
  PagesService
} from "./chunk-F6AG6VOS.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-AB3KI4M6.js";

// src/app/view/about/about/about.component.ts
var _c0 = ["collapse"];
var _c1 = (a0, a1, a2, a3) => ({ "text-cyan-500": a0, "text-fuchsia-500": a1, "text-blue-500": a2, "text-gray-300": a3 });
var _c2 = () => [0, 3, 6, 9];
var _c3 = () => [1, 4, 7, 10];
var _c4 = () => [2, 5, 8, 11];
function AboutComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 14);
    \u0275\u0275listener("click", function AboutComponent_ng_container_12_Template_p_click_1_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab(tab_r2.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c1, ctx_r2.activeTab === "cayn" && tab_r2.color === "cayn", ctx_r2.activeTab === "fuchsia" && tab_r2.color === "fuchsia", ctx_r2.activeTab === "center" && tab_r2.color === "center", ctx_r2.activeTab !== tab_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", tab_r2.label, " ");
  }
}
function AboutComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15, 0)(3, "input", 16);
    \u0275\u0275listener("change", function AboutComponent_ng_container_14_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCollapseChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275element(7, "span", 19)(8, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("border-cyan-300", \u0275\u0275pureFunction0(16, _c2).includes(i_r6))("border-fuchsia-300", \u0275\u0275pureFunction0(17, _c3).includes(i_r6))("border-blue-300", \u0275\u0275pureFunction0(18, _c4).includes(i_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", tab_r5.id)("checked", ctx_r2.activeTab === tab_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tab_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-cyan-500", tab_r5.color === "cayn")("border-fuchsia-500", tab_r5.color === "fuchsia")("border-blue-500", tab_r5.color === "center");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", tab_r5.body, \u0275\u0275sanitizeHtml);
  }
}
var AboutComponent = class _AboutComponent {
  pagesService;
  scrollTop;
  page = null;
  quizCount = 0;
  activeTab = "cayn";
  // по умолчанию первый
  collapses;
  constructor(pagesService, scrollTop) {
    this.pagesService = pagesService;
    this.scrollTop = scrollTop;
  }
  ngOnInit() {
    this.scrollTop.toTop();
    const stored = localStorage.getItem("quizCount");
    this.quizCount = stored ? Number(stored) : 0;
    this.pagesService.getPage("about").subscribe((page) => {
      this.page = page;
      this.activeTab = this.data?.tabs?.[0]?.id || "cayn";
      setTimeout(() => this.updateBgClasses(), 100);
    });
  }
  ngAfterViewInit() {
    this.collapses.changes.subscribe(() => {
      this.updateBgClasses();
    });
  }
  get data() {
    return this.page?.content?.["about"];
  }
  // Клик по вкладке
  setActiveTab(tabId) {
    this.activeTab = tabId;
    this.updateBgClasses();
  }
  // Когда меняется radio (через collapse)
  onCollapseChange(event) {
    const input = event.target;
    if (input.checked) {
      this.activeTab = input.value;
      this.updateBgClasses();
    }
  }
  // Обновляем bg-shadow-*
  updateBgClasses() {
    if (!this.collapses)
      return;
    this.collapses.forEach((el) => {
      const div = el.nativeElement;
      const input = div.querySelector("input");
      div.classList.remove("bg-shadow-cayn", "bg-shadow-fuchsia", "bg-shadow-center");
      if (input && input.value === this.activeTab) {
        div.classList.add(`bg-shadow-${input.value}`);
      }
    });
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)(\u0275\u0275directiveInject(PagesService), \u0275\u0275directiveInject(ScrollTopService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], viewQuery: function AboutComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.collapses = _t);
    }
  }, decls: 15, vars: 4, consts: [["collapse", ""], [1, "h-space", "mb-8"], [1, "absolute", "inset-0", "-z-10"], [1, "absolute", "-top-40", "left-1/2", "-translate-x-1/2", "h-[32rem]", "w-full", "lg:w-[32rem]", "rounded-full", "blur-3xl", "opacity-20", 2, "background", "radial-gradient(closest-side, #dc2626, transparent 70%)"], [1, "absolute", "top-40", "right-10", "h-64", "w-64", "rounded-full", "blur-3xl", "opacity-25", 2, "background", "radial-gradient(closest-side, #6b7280, transparent 70%)"], [1, "container", "max-w-[850px]", "px-6", "py-10", "mx-auto"], [1, "text-2xl", "capitalize", "lg:text-3xl", "font-semibold", "tracking-tight", "cursor-pointer", "text-center", "lg:mb-6"], [1, "bg-gradient-to-r", "from-zinc-200", "via-red-500", "to-zinc-100", "bg-clip-text", "text-transparent"], [1, "text-md", "md:text-xl", "text-center", "text-white", "opacity-70", "w-[80%]", "mx-auto", 3, "innerHTML"], [1, "mt-4", "lg:mt-8", "xl:mt-16", "lg:flex", "lg:-mx-12"], [1, "lg:mx-12"], [1, "space-y-4", "md:pt-4"], [4, "ngFor", "ngForOf"], [1, "flex-1", "mt-4", "lg:mx-12", "lg:mt-0", "text-balance"], [1, "block", "hover:text-red-500", "transition-all", "cursor-pointer", "text-lg", 3, "click", "ngClass"], [1, "collapse", "cursor-pointer", "border", "my-4"], ["type", "radio", "name", "my-accordion-1", 3, "change", "value", "checked"], [1, "collapse-title", "font-semibold", "mx-4", "text-xl", "text-white"], [1, "collapse-content", "flex"], [1, "border", "ml-4"], [1, "max-w-3xl", "px-4", "text-gray-500", "dark:text-gray-300", 3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2);
      \u0275\u0275element(2, "div", 3)(3, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "h2", 6)(6, "span", 7);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "p", 8);
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11);
      \u0275\u0275template(12, AboutComponent_ng_container_12_Template, 3, 7, "ng-container", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 13);
      \u0275\u0275template(14, AboutComponent_ng_container_14_Template, 9, 19, "ng-container", 12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", (ctx.data == null ? null : ctx.data.title) || "About Us...", " ");
      \u0275\u0275advance();
      \u0275\u0275property("innerHTML", ctx.data == null ? null : ctx.data.subtitle, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.data == null ? null : ctx.data.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.data == null ? null : ctx.data.tabs);
    }
  }, dependencies: [NgClass, NgForOf], styles: ["\n\n.about[_ngcontent-%COMP%] {\n  padding-top: 80px;\n}\n@media (max-width: 1024px) {\n  .collapse-title[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent" });
})();

// src/app/view/about/about.module.ts
var routes = [
  { path: "", component: AboutComponent }
];
var AboutModule = class _AboutModule {
  static \u0275fac = function AboutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ] });
};

export {
  AboutModule
};
//# sourceMappingURL=chunk-BIVSASMF.js.map
