import {
  CartModalService,
  CartService,
  FavoritesService,
  LightboxService,
  animate,
  style,
  transition,
  trigger
} from "./chunk-TIREVR5C.js";
import {
  FormsModule
} from "./chunk-XOE3LYJN.js";
import {
  PagesService
} from "./chunk-F6AG6VOS.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  ElementRef,
  EventEmitter,
  NgForOf,
  NgIf,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-AB3KI4M6.js";

// src/app/shared/components/header/header.component.ts
var _c0 = () => ["/"];
var _c1 = () => ["/main"];
var _c2 = (a0) => [a0];
function HeaderComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r1, " ");
  }
}
function HeaderComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", n_r2, " ");
  }
}
function HeaderComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function HeaderComponent_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.installPwa());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_li_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 53);
    \u0275\u0275listener("click", function HeaderComponent_li_44_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 54);
    \u0275\u0275element(4, "path", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, item_r6.route));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.label, " ");
  }
}
function HeaderComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function HeaderComponent_div_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_li_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 57)(1, "a", 58);
    \u0275\u0275listener("click", function HeaderComponent_li_60_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 54);
    \u0275\u0275element(4, "path", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, item_r9.route));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.label, " ");
  }
}
var HeaderComponent = class _HeaderComponent {
  pagesService;
  cartService;
  favoritesService;
  cartModalService;
  isMenuOpen = false;
  showInstallButton = false;
  menuItems = [];
  cartCount$;
  favCount$;
  constructor(pagesService, cartService, favoritesService, cartModalService) {
    this.pagesService = pagesService;
    this.cartService = cartService;
    this.favoritesService = favoritesService;
    this.cartModalService = cartModalService;
    this.cartCount$ = cartService.count$;
    this.favCount$ = favoritesService.count$;
  }
  ngOnInit() {
    this.loadMenuItems();
  }
  loadMenuItems() {
    this.pagesService.getPage("menu-items").subscribe({
      next: (page) => {
        if (page?.content?.["items"]) {
          this.menuItems = page.content["items"].filter((item) => item.isVisible).sort((a, b) => a.order - b.order);
        } else {
          this.menuItems = this.getDefaultMenuItems();
        }
      },
      error: () => {
        this.menuItems = this.getDefaultMenuItems();
      }
    });
  }
  getDefaultMenuItems() {
    return [
      { id: "home", label: "Shop Now...", route: "/", order: 1, isVisible: true },
      { id: "terms", label: "Terms of Service...", route: "/terms", order: 2, isVisible: true },
      { id: "about", label: "About...", route: "/about", order: 3, isVisible: true },
      { id: "contacts", label: "Contacts...", route: "/contacts", order: 4, isVisible: true },
      { id: "faq", label: "FAQ", route: "/faq", order: 5, isVisible: true },
      { id: "policy", label: "Privacy Policy...", route: "/policy", order: 6, isVisible: true }
    ];
  }
  onToggle(event) {
    this.isMenuOpen = event.target.checked;
  }
  closeMenu() {
    this.isMenuOpen = false;
    const checkbox = document.getElementById("menu-toggle");
    if (checkbox)
      checkbox.checked = false;
  }
  installPwa() {
  }
  openCart() {
    this.cartModalService.open("cart");
  }
  openFavorites() {
    this.cartModalService.open("favorites");
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(PagesService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(FavoritesService), \u0275\u0275directiveInject(CartModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 61, vars: 27, consts: [[1, "header"], [1, "navbar", "glass", "relative"], [1, "navbar-start", "w-fit", "cursor-pointer", 3, "click", "routerLink"], ["src", "https://i.ibb.co/Qvd3RYXX/5.png", "alt", "VoteVibe", 1, "w-[50px]"], [1, "navbar-center", "flex-1", "justify-center"], [1, "text-lg", "font-semibold", "tracking-tight", "cursor-pointer", 3, "click", "routerLink"], [1, "bg-gradient-to-r", "from-red-900", "via-red-400", "to-red-800", "bg-clip-text", "text-transparent"], [1, "navbar-end", "w-fit", 2, "gap", "8px", "display", "flex", "align-items", "center", "margin-right", "8px"], ["title", "Favorites", 1, "btn", "btn-circle", "btn-sm", "bg-transparent", "border", "border-zinc-700", "hover:border-red-600", "relative", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], ["class", "badge badge-xs absolute -top-1 -right-1 bg-red-700 text-white border-0 text-[10px] min-w-[16px] h-[16px] flex items-center justify-center rounded-full", 4, "ngIf"], ["title", "Cart", 1, "btn", "btn-circle", "btn-sm", "bg-transparent", "border", "border-zinc-700", "hover:border-red-600", "relative", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.5 6H21l-1.68 8.39c-.16.8-.87 1.61-1.85 1.61H8.55c-.99 0-1.7-.82-1.85-1.62L5.5 6zM3 2H1v2h2l3.6 7.59L5.25 14A2 2 0 0 0 7 17h14v-2H7.42a.25.25 0 0 1-.25-.25l.03-.12L8.1 13h9.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21L4.27 2H3z"], [1, "navbar-end", "w-fit"], ["for", "menu-toggle", 1, "btn", "btn-circle", "bg-gradient-to-r", "from-zinc-900", "via-red-700", "to-zinc-800", "accent-hover", "swap", "swap-rotate"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "swap-off", "fill-current", "w-6", "h-6"], ["d", "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "swap-on", "fill-current", "w-6", "h-6", 3, "click"], ["points", "400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"], [1, "btn-group"], ["class", "absolute top-[15px] bottom-0 left-auto right-[65px] md:right-[75px] -translate-x-1/2 \n          btn btn-circle bg-gradient-to-r to-cyan-400 from-green-400 \n          font-bold rounded-full shadow-2xl flex items-center z-50 animate-bounce text-black", 3, "click", 4, "ngIf"], ["id", "menu-toggle", "type", "checkbox", 1, "hidden", 3, "change", "checked"], [1, "drawer", "drawer-end", "md:hidden", "fixed", "z-[1111]"], ["id", "mobile-drawer", "type", "checkbox", 1, "drawer-toggle", 3, "click"], [1, "drawer-side", "z-50"], ["for", "menu-toggle", 1, "drawer-overlay", 3, "click"], [1, "menu", "bg-base-200", "min-h-full", "w-80", "bg-black/80"], [1, "flex", "flex-row", "justify-center", "items-center", "py-4"], ["src", "https://i.ibb.co/Qvd3RYXX/5.png", "alt", "", 1, "w-[50px]", "p-0", 3, "click", "routerLink"], [1, "text-3xl", "font-semibold", "tracking-tight", "cursor-pointer"], [1, "bg-gradient-to-r", "from-red-900", "via-red-400", "to-red-800", "bg-clip-text", "text-transparent", 3, "click", "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "35", "height", "35", "viewBox", "0 0 24 24", 1, "absolute", "right-0", "cursor-pointer", "top-0", "p-0", 3, "click"], ["fill", "none", "stroke", "#fff", "stroke-dasharray", "16", "stroke-dashoffset", "16", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2"], ["d", "M7 7l10 10"], ["fill", "freeze", "attributeName", "stroke-dashoffset", "dur", "0.4s", "values", "16;0"], ["d", "M17 7l-10 10"], ["fill", "freeze", "attributeName", "stroke-dashoffset", "begin", "0.4s", "dur", "0.4s", "values", "16;0"], [4, "ngFor", "ngForOf"], [1, "hidden", "md:block", "fixed", "top-0", "right-0", "h-full", "w-80", "bg-base-200", "z-50", "transition-transform", "duration-300", "drawer-desktop"], ["class", "absolute inset-0 bg-black/50 drawer-overlay", 3, "click", 4, "ngIf"], [1, "relative", "h-full", "p-0"], [1, "menu"], [1, "flex", "flex-row", "justify-center", "items-center", "py-4", 3, "click"], ["src", "https://i.ibb.co/Qvd3RYXX/5.png", "alt", "", 1, "w-[70px]"], [1, "text-3xl", "font-semibold", "tracking-tight", "cursor-pointer", 3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 24 24", 1, "absolute", "right-4", "cursor-pointer", "p-0"], ["class", "w-1/2 mx-auto", 4, "ngFor", "ngForOf"], [1, "badge", "badge-xs", "absolute", "-top-1", "-right-1", "bg-red-700", "text-white", "border-0", "text-[10px]", "min-w-[16px]", "h-[16px]", "flex", "items-center", "justify-center", "rounded-full"], [1, "absolute", "top-[15px]", "bottom-0", "left-auto", "right-[65px]", "md:right-[75px]", "-translate-x-1/2", "btn", "btn-circle", "bg-gradient-to-r", "to-cyan-400", "from-green-400", "font-bold", "rounded-full", "shadow-2xl", "flex", "items-center", "z-50", "animate-bounce", "text-black", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 24 24", 1, "text-black"], ["fill", "currentColor", "d", "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4l4-4z"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-ghost", "accent-hover", "rounded-xl", 3, "click", "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["fill", "#fff", "d", "M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"], [1, "absolute", "inset-0", "bg-black/50", "drawer-overlay", 3, "click"], [1, "w-1/2", "mx-auto"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-ghost", "accent-hover", "rounded-[30px]", "text-lg", 3, "click", "routerLink"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
      \u0275\u0275listener("click", function HeaderComponent_Template_span_click_5_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7, " ShopNow ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_9_listener() {
        return ctx.openFavorites();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, HeaderComponent_span_12_Template, 2, 1, "span", 11);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_14_listener() {
        return ctx.openCart();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 13);
      \u0275\u0275element(16, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, HeaderComponent_span_17_Template, 2, 1, "span", 11);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 15)(20, "label", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 17);
      \u0275\u0275element(22, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "svg", 19);
      \u0275\u0275listener("click", function HeaderComponent_Template_svg_click_23_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(24, "polygon", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div", 21);
      \u0275\u0275template(26, HeaderComponent_button_26_Template, 3, 0, "button", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "input", 23);
      \u0275\u0275listener("change", function HeaderComponent_Template_input_change_27_listener($event) {
        return ctx.onToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 24)(29, "input", 25);
      \u0275\u0275listener("click", function HeaderComponent_Template_input_click_29_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 26)(31, "label", 27);
      \u0275\u0275listener("click", function HeaderComponent_Template_label_click_31_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "ul", 28)(33, "li", 29)(34, "img", 30);
      \u0275\u0275listener("click", function HeaderComponent_Template_img_click_34_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 31)(36, "span", 32);
      \u0275\u0275listener("click", function HeaderComponent_Template_span_click_36_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(37, " ShopNow ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 33);
      \u0275\u0275listener("click", function HeaderComponent_Template_svg_click_38_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(39, "g", 34)(40, "path", 35);
      \u0275\u0275element(41, "animate", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "path", 37);
      \u0275\u0275element(43, "animate", 38);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(44, HeaderComponent_li_44_Template, 5, 4, "li", 39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div", 40);
      \u0275\u0275template(46, HeaderComponent_div_46_Template, 1, 0, "div", 41);
      \u0275\u0275elementStart(47, "div", 42)(48, "ul", 43)(49, "li", 44);
      \u0275\u0275listener("click", function HeaderComponent_Template_li_click_49_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275element(50, "img", 45);
      \u0275\u0275elementStart(51, "span", 46)(52, "span", 6);
      \u0275\u0275text(53, " ShopNow ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 47)(55, "g", 34)(56, "path", 35);
      \u0275\u0275element(57, "animate", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "path", 37);
      \u0275\u0275element(59, "animate", 38);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(60, HeaderComponent_li_60_Template, 5, 4, "li", 48);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c0));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 18, ctx.favCount$));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(18, 20, ctx.cartCount$));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.showInstallButton);
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.isMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("drawer-open", ctx.isMenuOpen);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c1));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-0", ctx.isMenuOpen)("translate-x-full", !ctx.isMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMenuOpen);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c1));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.menuItems);
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, AsyncPipe], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  scale: 3.1;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  scale: 2.3;\n  transition: 0.3s ease-in-out;\n}\n.header[_ngcontent-%COMP%]   .navbar-center[_ngcontent-%COMP%]   .text-lg[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.header[_ngcontent-%COMP%]   .logo-link[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  border-radius: 20px;\n  position: fixed;\n  margin: 40px 0;\n  z-index: 99;\n  padding: 15px 10px !important;\n}\n.header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 1000px;\n  z-index: -1;\n  visibility: hidden;\n  opacity: 0;\n  padding: 10px;\n  transition: right 0.3s ease-in-out, opacity 0.2s ease-in-out;\n}\n.header[_ngcontent-%COMP%]   .navbar-end[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n.header[_ngcontent-%COMP%]   .nav-menu.show[_ngcontent-%COMP%] {\n  top: -10px !important;\n  left: 100% !important;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: right 0.3s ease-in-out, opacity 0.2s ease-in-out;\n  width: fit-content;\n  border-radius: 20px;\n}\n.header[_ngcontent-%COMP%]   .nav-dropdown.glass[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.fast-play[_ngcontent-%COMP%] {\n  display: none;\n}\n.drawer-side[_ngcontent-%COMP%] {\n  overflow-x: visible !important;\n}\n.drawer-side[_ngcontent-%COMP%]   .list-item-active[_ngcontent-%COMP%] {\n  border-radius: 25px !important;\n}\n.wrapper-mobile.display[_ngcontent-%COMP%] {\n  display: none;\n}\n.wrapper-desctop.display[_ngcontent-%COMP%] {\n  display: block;\n}\n.drawer-side-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1111;\n  right: 0;\n  top: 0;\n  width: 90%;\n  height: 100%;\n}\n.wrapper-side-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    width: 99% !important;\n    margin: 25px 0 !important;\n  }\n  .header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    top: 80px !important;\n  }\n  .header[_ngcontent-%COMP%]   .nav-menu.show[_ngcontent-%COMP%] {\n    left: 110% !important;\n  }\n}\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  border-radius: 20px;\n  position: fixed;\n  margin: 40px 0;\n  z-index: 99;\n  padding: 15px 10px !important;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.header[_ngcontent-%COMP%]   .navbar-center[_ngcontent-%COMP%]   .text-lg[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.drawer-desktop[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 1111;\n}\n.menu[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 20px 0 0 20px;\n}\n@media (max-width: 1024px) {\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    width: 99% !important;\n    margin: 25px 0 !important;\n  }\n}\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    margin: 15px 0 !important;\n  }\n  .wrapper-side-logo[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.8);\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n}\n.translate-x-full[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();

// src/app/shared/components/footer/footer.component.ts
var _c02 = () => ["/"];
var _c12 = (a0) => [a0];
var _c22 = (a0) => ({ exact: a0 });
function FooterComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c12, item_r1.route))("routerLinkActiveOptions", \u0275\u0275pureFunction1(5, _c22, item_r1.route === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
function FooterComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c12, item_r2.route))("routerLinkActiveOptions", \u0275\u0275pureFunction1(5, _c22, item_r2.route === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
var FooterComponent = class _FooterComponent {
  pagesService;
  menuItems = [];
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  constructor(pagesService) {
    this.pagesService = pagesService;
  }
  ngOnInit() {
    this.loadMenuItems();
  }
  /**
   * ✅ Загрузка пунктов меню из API
   */
  loadMenuItems() {
    this.pagesService.getPage("menu-items").subscribe({
      next: (page) => {
        if (page?.content?.["items"]) {
          this.menuItems = page.content["items"].filter((item) => item.isVisible).sort((a, b) => a.order - b.order);
        } else {
          this.menuItems = this.getDefaultMenuItems();
        }
      },
      error: (err) => {
        console.error("Failed to load menu items:", err);
        this.menuItems = this.getDefaultMenuItems();
      }
    });
  }
  /**
   * Дефолтное меню
   */
  getDefaultMenuItems() {
    return [
      { id: "home", label: "Shop Now...", route: "/", order: 1, isVisible: true },
      { id: "terms", label: "Terms of Service...", route: "/terms", order: 2, isVisible: true },
      { id: "about", label: "About...", route: "/about", order: 3, isVisible: true },
      { id: "contacts", label: "Contacts...", route: "/contacts", order: 4, isVisible: true },
      { id: "faq", label: "FAQ...", route: "/faq", order: 5, isVisible: true },
      { id: "policy", label: "Privacy Policy...", route: "/policy", order: 6, isVisible: true }
    ];
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(PagesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 5, consts: [[1, "footer", "flex", "flex-col", "gap-0"], [1, "container", "footer-wrapper", "md:w-[1000px]", "mx-auto", "md:grid", "md:items-center", "md:justify-center", "md:my-[40px]"], [1, "flex", "items-center", "justify-center", "menu", "min-h-full", "p-4", "md:p-0", "mx-auto", "text-center", "w-full", "pb-0", "md:max-w-[1200px]", "md:w-full"], [1, "flex", "justify-center", "items-center", "gap-4", "py-[15px]"], [1, "w-fit"], ["src", "https://i.ibb.co/Qvd3RYXX/5.png", "alt", "", 1, "w-[50px]", "md:w-[70px]"], [1, "text-lg", "font-semibold", "tracking-tight", "cursor-pointer", 3, "routerLink"], [1, "bg-gradient-to-r", "from-red-900", "via-red-400", "to-red-800", "bg-clip-text", "text-transparent", "md:text-3xl"], ["class", "item-mobile", 4, "ngFor", "ngForOf"], [1, "menu-desctop", "grid", "grid-cols-2", "min-h-full", "p-4", "pt-0", "md:pb-0", "text-center", "md:max-w-[500px]", "w-full", "mx-auto", "md:mr-0", "md:ml-auto"], [4, "ngFor", "ngForOf"], [1, "text-xs", "flex", "items-center", "justify-center", "gap-4", "pb-2", "opacity-50", "w-full"], [1, "item-mobile"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-ghost", "accent-hover", "list-item-active", 3, "routerLink", "routerLinkActiveOptions"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["fill", "#fff", "d", "M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-ghost", "accent-hover", "list-item-active", "text-lg", 3, "routerLink", "routerLinkActiveOptions"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "ul", 2)(3, "li")(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6)(8, "span", 7);
      \u0275\u0275text(9, " ShopNow ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(10, FooterComponent_li_10_Template, 5, 7, "li", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 9);
      \u0275\u0275template(12, FooterComponent_li_12_Template, 5, 7, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Copyright \xA9 ", ctx.currentYear, " \xABVoteVibe\xBB. ");
    }
  }, dependencies: [NgForOf, RouterLink, RouterLinkActive], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0;\n  justify-content: center;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%] {\n  grid-template-columns: 30% 70%;\n}\n.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n.footer[_ngcontent-%COMP%]   .item-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer[_ngcontent-%COMP%]   .item-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .footer[_ngcontent-%COMP%]   .item-desctop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .footer[_ngcontent-%COMP%]   .menu-desctop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();

// src/app/shared/directives/change-background.directive.ts
var ChangeBackgroundDirective = class _ChangeBackgroundDirective {
  el;
  colors = [
    "bg-gradinet-red-90",
    "bg-gradient-regular-90",
    "bg-gradinet-accent-0",
    "bg-gradient-regular-0",
    "bg-gradinet-red-0"
  ];
  currentIndex = -1;
  constructor(el) {
    this.el = el;
    this.el.nativeElement.style.background = "#282a36";
  }
  // Слушатель кликов
  onClick() {
    if (this.currentIndex >= 0) {
      this.el.nativeElement.classList.remove(this.colors[this.currentIndex]);
    }
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    this.el.nativeElement.classList.add(this.colors[this.currentIndex]);
  }
  static \u0275fac = function ChangeBackgroundDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangeBackgroundDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ChangeBackgroundDirective, selectors: [["", "appChangeBackground", ""]], hostBindings: function ChangeBackgroundDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ChangeBackgroundDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  } });
};

// src/app/shared/directives/random-class.directive.ts
var RandomBackgroundDirective = class _RandomBackgroundDirective {
  el;
  colors = [
    "#0886e6",
    "#cc26d5",
    "#67e8f95d",
    "#7d8eef",
    "#7702ff"
  ];
  usedColors = [];
  // Для хранения использованных цветов
  originalBackground = "";
  // Для хранения исходного цвета фона
  constructor(el) {
    this.el = el;
  }
  // Сохраняем исходный цвет при наведении
  onMouseEnter() {
    this.originalBackground = this.el.nativeElement.style.background || "";
    this.changeBackground();
  }
  // Возвращаем исходный цвет при покидании элемента
  onMouseLeave() {
    this.resetBackground();
  }
  // Устанавливаем случайный уникальный цвет
  changeBackground() {
    if (this.colors.length === 0) {
      this.colors = [...this.usedColors];
      this.usedColors = [];
    }
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    const randomColor = this.colors[randomIndex];
    this.usedColors.push(randomColor);
    this.colors.splice(randomIndex, 1);
    this.el.nativeElement.style.background = randomColor;
  }
  resetBackground() {
    this.el.nativeElement.style.background = this.originalBackground;
  }
  static \u0275fac = function RandomBackgroundDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RandomBackgroundDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RandomBackgroundDirective, selectors: [["", "appRandomBackground", ""]], hostBindings: function RandomBackgroundDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function RandomBackgroundDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function RandomBackgroundDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  } });
};

// src/app/shared/components/banner/banner.component.ts
var _c03 = () => ["/quiz", "11"];
var _c13 = () => ["/"];
function BannerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", ctx_r0.page == null ? null : ctx_r0.page.content == null ? null : ctx_r0.page.content["banner"] == null ? null : ctx_r0.page.content["banner"].title);
    \u0275\u0275property("src", ctx_r0.page == null ? null : ctx_r0.page.content == null ? null : ctx_r0.page.content["backgroundImage"], \u0275\u0275sanitizeUrl);
  }
}
var BannerComponent = class _BannerComponent {
  quizCount = 0;
  close = new EventEmitter();
  showAll = new EventEmitter();
  page = null;
  onCloseClick() {
    this.close.emit();
    this.showAll.emit();
  }
  static \u0275fac = function BannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BannerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BannerComponent, selectors: [["app-banner"]], inputs: { quizCount: "quizCount", page: "page" }, outputs: { close: "close", showAll: "showAll" }, decls: 16, vars: 11, consts: [[1, "overflow-hidden", "h-space", "banner"], ["class", "absolute left-0 top-0 w-full h-full", 4, "ngIf"], [1, "absolute", "inset-0", "-z-10"], [1, "absolute", "-top-40", "left-1/2", "-translate-x-1/2", "h-[32rem]", "w-[32rem]", "rounded-full", "blur-3xl", "opacity-20", 2, "background", "radial-gradient(closest-side, #dc2626, transparent 70%)"], [1, "absolute", "top-40", "right-10", "h-64", "w-64", "rounded-full", "blur-3xl", "opacity-25", 2, "background", "radial-gradient(closest-side, #6b7280, transparent 70%)"], [1, "mx-auto", "mx-w-1024", "px-4", "sm:px-6", "lg:px-8", "pb-10", "relative", "z-10"], [1, "max-w-[800px]", "mx-auto"], ["data-i18n", "hero.title", 1, "text-3xl", "sm:text-5xl", "font-extrabold", "leading-tight", "mx-auto", "text-center"], ["data-i18n", "hero.subtitle", 1, "mt-4", "sm:mt-6", "text-slate-300", "text-base", "lg:text-[1rem]", "max-w-2xl", "mx-auto", "text-center"], [1, "mt-6", "sm:mt-8", "flex", "flex-col", "sm:flex-row", "gap-3", "mx-auto", "justify-center"], ["data-i18n", "hero.cta_primary", "aria-label", "Buy now", 1, "inline-flex", "items-center", "justify-center", "rounded-2xl", "px-5", "py-3", "text-sm", "sm:text-base", "font-semibold", "bg-gradient-to-r", "from-zinc-900", "via-red-700", "to-zinc-800", "text-white", "shadow-lg", "shadow-red-700/30", "hover:opacity-95", "transition", 3, "routerLink"], ["data-i18n", "hero.cta_secondary", "aria-label", "See featured products", 1, "inline-flex", "items-center", "justify-center", "rounded-2xl", "px-5", "py-3", "text-sm", "sm:text-base", "font-semibold", "bg-white/5", "border", "border-white/10", "hover:bg-white/10", "transition", 3, "click", "routerLink"], [1, "absolute", "left-0", "top-0", "w-full", "h-full"], [1, "h-full", "w-full", "object-cover", 3, "src", "alt"]], template: function BannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, BannerComponent_div_1_Template, 2, 2, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "h1", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 11);
      \u0275\u0275listener("click", function BannerComponent_Template_a_click_14_listener() {
        return ctx.onCloseClick();
      });
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("--custom-bg", ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["backgroundImage"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["backgroundImage"]);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["banner"] == null ? null : ctx.page.content["banner"].title) || "Shop First, Deal with the Rest Later...\uFF01", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["banner"] == null ? null : ctx.page.content["banner"].subtitle) || " 30-second find \u2014 funny, surprising, even better with friends. Pick a product and buy right now!", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c03));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["banner"] == null ? null : ctx.page.content["banner"].playBtn == null ? null : ctx.page.content["banner"].playBtn.text) || "Buy now", " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c13));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (ctx.page == null ? null : ctx.page.content == null ? null : ctx.page.content["banner"] == null ? null : ctx.page.content["banner"].listQsBtn == null ? null : ctx.page.content["banner"].listQsBtn.text) || "All Products", " ");
    }
  }, dependencies: [NgIf, RouterLink], styles: ['\n\n.banner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.banner[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.48),\n      rgba(0, 0, 0, 0.48)),\n    linear-gradient(\n      180deg,\n      rgba(1, 23, 44, 0) 57.96%,\n      #01172c 96.67%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: "";\n}\n.banner[_ngcontent-%COMP%]::before {\n  position: absolute;\n  background-image: var(--custom-bg);\n  background-size: cover;\n  background-position: center center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: "";\n}\n.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-wrap: balance;\n  text-wrap: nowrap;\n}\n@media (max-width: 1024px) {\n  .banner.h-space[_ngcontent-%COMP%] {\n    padding-top: 130px;\n  }\n  .banner.h-space[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-wrap: balance;\n  }\n}\n/*# sourceMappingURL=banner.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BannerComponent, { className: "BannerComponent" });
})();

// src/app/shared/components/cart-modal/cart-modal.component.ts
function CartModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function CartModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
  }
}
function CartModalComponent_ng_container_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "circle", 20)(3, "circle", 21)(4, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your cart is empty");
    \u0275\u0275elementEnd()();
  }
}
function CartModalComponent_ng_container_23_div_5_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r4.quiz.previewImage, \u0275\u0275sanitizeUrl)("alt", item_r4.quiz.title);
  }
}
function CartModalComponent_ng_container_23_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd()();
  }
}
function CartModalComponent_ng_container_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275template(2, CartModalComponent_ng_container_23_div_5_img_2_Template, 1, 2, "img", 25)(3, CartModalComponent_ng_container_23_div_5_div_3_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29)(8, "button", 30);
    \u0275\u0275listener("click", function CartModalComponent_ng_container_23_div_5_Template_button_click_8_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQty(item_r4.quiz.id, item_r4.quantity - 1));
    });
    \u0275\u0275text(9, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 30);
    \u0275\u0275listener("click", function CartModalComponent_ng_container_23_div_5_Template_button_click_12_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQty(item_r4.quiz.id, item_r4.quantity + 1));
    });
    \u0275\u0275text(13, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 32);
    \u0275\u0275listener("click", function CartModalComponent_ng_container_23_div_5_Template_button_click_14_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFromCart(item_r4.quiz.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 33);
    \u0275\u0275element(16, "line", 8)(17, "line", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r4.quiz.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r4.quiz.previewImage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.quiz.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r4.quantity);
  }
}
function CartModalComponent_ng_container_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275text(5, " Checkout ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 33);
    \u0275\u0275element(7, "line", 41)(8, "polyline", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total items: ", \u0275\u0275pipeBind1(3, 1, ctx_r1.cartCount$), "");
  }
}
function CartModalComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275template(2, CartModalComponent_ng_container_23_div_2_Template, 7, 0, "div", 14);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275template(5, CartModalComponent_ng_container_23_div_5_Template, 18, 4, "div", 16);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CartModalComponent_ng_container_23_div_7_Template, 9, 3, "div", 17);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_1_0 = \u0275\u0275pipeBind1(3, 3, ctx_r1.cartItems$)) == null ? null : tmp_1_0.length));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 5, ctx_r1.cartItems$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(8, 7, ctx_r1.cartItems$)) == null ? null : tmp_3_0.length);
  }
}
function CartModalComponent_ng_container_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No favorites yet");
    \u0275\u0275elementEnd()();
  }
}
function CartModalComponent_ng_container_25_div_5_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const quiz_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", quiz_r6.previewImage, \u0275\u0275sanitizeUrl)("alt", quiz_r6.title);
  }
}
function CartModalComponent_ng_container_25_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd()();
  }
}
function CartModalComponent_ng_container_25_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275template(2, CartModalComponent_ng_container_25_div_5_img_2_Template, 1, 2, "img", 25)(3, CartModalComponent_ng_container_25_div_5_div_3_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "p", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function CartModalComponent_ng_container_25_div_5_Template_button_click_7_listener() {
      const quiz_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cartService.add(quiz_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 45);
    \u0275\u0275element(9, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function CartModalComponent_ng_container_25_div_5_Template_button_click_10_listener() {
      const quiz_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFromFav(quiz_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 33);
    \u0275\u0275element(12, "line", 8)(13, "line", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const quiz_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", quiz_r6.previewImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !quiz_r6.previewImage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(quiz_r6.title);
  }
}
function CartModalComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275template(2, CartModalComponent_ng_container_25_div_2_Template, 5, 0, "div", 14);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275template(5, CartModalComponent_ng_container_25_div_5_Template, 14, 3, "div", 16);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_1_0 = \u0275\u0275pipeBind1(3, 2, ctx_r1.favItems$)) == null ? null : tmp_1_0.length));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 4, ctx_r1.favItems$));
  }
}
var CartModalComponent = class _CartModalComponent {
  modalService;
  cartService;
  favoritesService;
  isOpen$;
  activeTab$;
  cartItems$;
  cartCount$;
  favItems$;
  favCount$;
  constructor(modalService, cartService, favoritesService) {
    this.modalService = modalService;
    this.cartService = cartService;
    this.favoritesService = favoritesService;
    this.isOpen$ = modalService.isOpen$;
    this.activeTab$ = modalService.activeTab$;
    this.cartItems$ = cartService.items$;
    this.cartCount$ = cartService.count$;
    this.favItems$ = favoritesService.items$;
    this.favCount$ = favoritesService.count$;
  }
  setTab(tab) {
    this.modalService.activeTab$.next(tab);
  }
  close() {
    this.modalService.close();
  }
  removeFromCart(id) {
    this.cartService.remove(id);
  }
  updateQty(id, qty) {
    this.cartService.updateQuantity(id, qty);
  }
  removeFromFav(id) {
    this.favoritesService.remove(id);
  }
  static \u0275fac = function CartModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartModalComponent)(\u0275\u0275directiveInject(CartModalService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(FavoritesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartModalComponent, selectors: [["app-cart-modal"]], decls: 27, vars: 27, consts: [["class", "cart-overlay", 3, "click", 4, "ngIf"], [1, "cart-panel"], [1, "cart-panel__header"], [1, "cart-panel__tabs"], [1, "cart-tab", 3, "click"], [1, "cart-tab__badge"], [1, "cart-panel__close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "cart-panel__divider"], [4, "ngIf"], [1, "cart-overlay", 3, "click"], [1, "cart-panel__body"], ["class", "cart-empty", 4, "ngIf"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], ["class", "cart-panel__footer", 4, "ngIf"], [1, "cart-empty"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], [1, "cart-item"], [1, "cart-item__img"], [3, "src", "alt", 4, "ngIf"], ["class", "cart-item__img-placeholder", 4, "ngIf"], [1, "cart-item__info"], [1, "cart-item__title"], [1, "cart-item__qty"], [1, "qty-btn", 3, "click"], [1, "qty-value"], [1, "cart-item__remove", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [3, "src", "alt"], [1, "cart-item__img-placeholder"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-1 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"], [1, "cart-panel__footer"], [1, "cart-total"], [1, "cart-checkout-btn"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"], [1, "cart-item__add-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.5 6H21l-1.68 8.39c-.16.8-.87 1.61-1.85 1.61H8.55c-.99 0-1.7-.82-1.85-1.62L5.5 6zM3 2H1v2h2l3.6 7.59L5.25 14A2 2 0 0 0 7 17h14v-2H7.42a.25.25 0 0 1-.25-.25l.03-.12L8.1 13h9.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21L4.27 2H3z"]], template: function CartModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CartModalComponent_div_0_Template, 1, 0, "div", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "button", 4);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275listener("click", function CartModalComponent_Template_button_click_6_listener() {
        return ctx.setTab("cart");
      });
      \u0275\u0275text(8, " Cart ");
      \u0275\u0275elementStart(9, "span", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 4);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275listener("click", function CartModalComponent_Template_button_click_12_listener() {
        return ctx.setTab("favorites");
      });
      \u0275\u0275text(14, " Favorites ");
      \u0275\u0275elementStart(15, "span", 5);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "async");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "button", 6);
      \u0275\u0275listener("click", function CartModalComponent_Template_button_click_18_listener() {
        return ctx.close();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 7);
      \u0275\u0275element(20, "line", 8)(21, "line", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(22, "div", 10);
      \u0275\u0275template(23, CartModalComponent_ng_container_23_Template, 9, 9, "ng-container", 11);
      \u0275\u0275pipe(24, "async");
      \u0275\u0275template(25, CartModalComponent_ng_container_25_Template, 7, 6, "ng-container", 11);
      \u0275\u0275pipe(26, "async");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 11, ctx.isOpen$));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("cart-panel--open", \u0275\u0275pipeBind1(3, 13, ctx.isOpen$));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("cart-tab--active", \u0275\u0275pipeBind1(7, 15, ctx.activeTab$) === "cart");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 17, ctx.cartCount$));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("cart-tab--active", \u0275\u0275pipeBind1(13, 19, ctx.activeTab$) === "favorites");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 21, ctx.favCount$));
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(24, 23, ctx.activeTab$) === "cart");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(26, 25, ctx.activeTab$) === "favorites");
    }
  }, dependencies: [NgForOf, NgIf, AsyncPipe], styles: ['@charset "UTF-8";\n\n\n\n.cart-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 9998;\n}\n.cart-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  max-width: 420px;\n  background: #09090b;\n  border-left: 1px solid #27272a;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: transform 320ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cart-panel--open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.cart-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px 0;\n  gap: 8px;\n}\n.cart-panel__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.cart-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px 8px 0 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #a1a1aa;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.cart-tab--active[_ngcontent-%COMP%] {\n  background: rgba(127, 29, 29, 0.25);\n  border-bottom-color: #dc2626;\n  color: #fff;\n}\n.cart-tab[_ngcontent-%COMP%]:hover:not(.cart-tab--active) {\n  color: #e4e4e7;\n}\n.cart-tab__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 5px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n  background: #7f1d1d;\n  color: #fff;\n}\n.cart-panel__close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: transparent;\n  border: 1px solid #3f3f46;\n  color: #a1a1aa;\n  cursor: pointer;\n  transition: all 200ms;\n}\n.cart-panel__close[_ngcontent-%COMP%]:hover {\n  background: #27272a;\n  color: #fff;\n  border-color: #dc2626;\n}\n.cart-panel__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 12px 0 0;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      rgba(153, 27, 27, 0.3333333333),\n      transparent);\n}\n.cart-panel__body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n  scrollbar-width: thin;\n  scrollbar-color: #3f3f46 transparent;\n}\n.cart-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 60px 0;\n  color: #71717a;\n}\n.cart-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.cart-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.cart-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 12px;\n  border: 1px solid #27272a;\n  transition: border-color 200ms;\n}\n.cart-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(185, 28, 28, 0.4);\n}\n.cart-item__img[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #18181b;\n}\n.cart-item__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cart-item__img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #52525b;\n}\n.cart-item__info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cart-item__title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #e4e4e7;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 6px;\n}\n.cart-item__qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cart-item__remove[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background: transparent;\n  border: none;\n  color: #71717a;\n  cursor: pointer;\n  transition: all 180ms;\n}\n.cart-item__remove[_ngcontent-%COMP%]:hover {\n  background: rgba(185, 28, 28, 0.2);\n  color: #f87171;\n}\n.cart-item__add-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background: rgba(127, 29, 29, 0.3);\n  border: 1px solid #7f1d1d;\n  color: #fca5a5;\n  cursor: pointer;\n  transition: all 180ms;\n  margin-right: 4px;\n}\n.cart-item__add-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(185, 28, 28, 0.5);\n}\n.qty-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 6px;\n  border: 1px solid #3f3f46;\n  background: #18181b;\n  color: #e4e4e7;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 180ms;\n  line-height: 1;\n}\n.qty-btn[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  color: #fff;\n}\n.qty-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  min-width: 20px;\n  text-align: center;\n}\n.cart-panel__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-top: 1px solid #27272a;\n  gap: 12px;\n}\n.cart-total[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #a1a1aa;\n}\n.cart-checkout-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #fff;\n  background:\n    linear-gradient(\n      to right,\n      #18181b,\n      #b91c1c,\n      #27272a);\n  border: none;\n  cursor: pointer;\n  transition: opacity 200ms;\n  white-space: nowrap;\n}\n.cart-checkout-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n/*# sourceMappingURL=cart-modal.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartModalComponent, { className: "CartModalComponent" });
})();

// src/app/shared/components/lightbox/lightbox.component.ts
function LightboxComponent_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.currentIndex + 1, " / ", ctx_r1.total, " ");
  }
}
function LightboxComponent_ng_container_0__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "circle", 22)(2, "line", 23)(3, "line", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
  }
}
function LightboxComponent_ng_container_0__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 9);
    \u0275\u0275element(1, "circle", 22)(2, "line", 23)(3, "line", 25);
    \u0275\u0275elementEnd();
  }
}
function LightboxComponent_ng_container_0_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_button_14_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigate(-1, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "polyline", 28);
    \u0275\u0275elementEnd()();
  }
}
function LightboxComponent_ng_container_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 29);
  }
}
function LightboxComponent_ng_container_0_span_18__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "circle", 22)(2, "line", 23)(3, "line", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
  }
}
function LightboxComponent_ng_container_0_span_18__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "circle", 22)(2, "line", 23)(3, "line", 25);
    \u0275\u0275elementEnd();
  }
}
function LightboxComponent_ng_container_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275template(1, LightboxComponent_ng_container_0_span_18__svg_svg_1_Template, 5, 0, "svg", 31)(2, LightboxComponent_ng_container_0_span_18__svg_svg_2_Template, 4, 0, "svg", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isZoomed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isZoomed);
  }
}
function LightboxComponent_ng_container_0_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_button_19_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigate(1, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "polyline", 34);
    \u0275\u0275elementEnd()();
  }
}
function LightboxComponent_ng_container_0_div_20_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_div_20_button_1_Template_button_click_0_listener($event) {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goTo(i_r7, $event));
    });
    \u0275\u0275element(1, "img", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const src_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("lb-thumb--active", i_r7 === ctx_r1.currentIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", src_r8, \u0275\u0275sanitizeUrl)("alt", ctx_r1.state.alt + " " + (i_r7 + 1));
  }
}
function LightboxComponent_ng_container_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_div_20_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, LightboxComponent_ng_container_0_div_20_button_1_Template, 2, 4, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.state.images);
  }
}
function LightboxComponent_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_div_21_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.state.alt, " ");
  }
}
function LightboxComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(4, LightboxComponent_ng_container_0_span_4_Template, 2, 2, "span", 4);
    \u0275\u0275element(5, "span", 5);
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isZoomed = !ctx_r1.isZoomed);
    });
    \u0275\u0275template(7, LightboxComponent_ng_container_0__svg_svg_7_Template, 5, 0, "svg", 7)(8, LightboxComponent_ng_container_0__svg_svg_8_Template, 4, 0, "svg", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 9);
    \u0275\u0275element(11, "line", 10)(12, "line", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275template(14, LightboxComponent_ng_container_0_button_14_Template, 3, 0, "button", 13);
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275listener("click", function LightboxComponent_ng_container_0_Template_div_click_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageClick($event));
    });
    \u0275\u0275template(16, LightboxComponent_ng_container_0_div_16_Template, 1, 0, "div", 15);
    \u0275\u0275elementStart(17, "img", 16);
    \u0275\u0275listener("load", function LightboxComponent_ng_container_0_Template_img_load_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageLoad());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, LightboxComponent_ng_container_0_span_18_Template, 3, 2, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, LightboxComponent_ng_container_0_button_19_Template, 3, 0, "button", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, LightboxComponent_ng_container_0_div_20_Template, 2, 1, "div", 19)(21, LightboxComponent_ng_container_0_div_21_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("@backdrop", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("@panel", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasMultiple);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("lb-btn--active", ctx_r1.isZoomed);
    \u0275\u0275property("title", ctx_r1.isZoomed ? "Zoom out" : "Zoom in");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isZoomed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isZoomed);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.hasMultiple);
    \u0275\u0275advance();
    \u0275\u0275classProp("lb-img-wrap--zoomed", ctx_r1.isZoomed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoaded);
    \u0275\u0275advance();
    \u0275\u0275classProp("lb-img--visible", ctx_r1.isLoaded)("lb-img--zoomed", ctx_r1.isZoomed);
    \u0275\u0275property("src", ctx_r1.currentSrc, \u0275\u0275sanitizeUrl)("alt", ctx_r1.state.alt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoaded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMultiple);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMultiple);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.alt && !ctx_r1.hasMultiple);
  }
}
var LightboxComponent = class _LightboxComponent {
  lightboxService;
  cdr;
  state = null;
  isZoomed = false;
  isLoaded = false;
  sub;
  touchStartX = 0;
  constructor(lightboxService, cdr) {
    this.lightboxService = lightboxService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.sub = this.lightboxService.state$.subscribe((s) => {
      const prevSrc = this.currentSrc;
      this.state = s;
      const newSrc = this.currentSrc;
      if (newSrc !== prevSrc) {
        this.isLoaded = false;
        this.isZoomed = false;
      }
      document.body.style.overflow = s ? "hidden" : "";
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    document.body.style.overflow = "";
  }
  // ── Computed ──────────────────────────────────────────
  get currentSrc() {
    return this.state?.images[this.state.index] ?? "";
  }
  get total() {
    return this.state?.images.length ?? 0;
  }
  get currentIndex() {
    return this.state?.index ?? 0;
  }
  get hasMultiple() {
    return this.total > 1;
  }
  // ── Keyboard ──────────────────────────────────────────
  onEsc() {
    this.close();
  }
  onLeft() {
    this.lightboxService.prev();
  }
  onRight() {
    this.lightboxService.next();
  }
  // ── Touch / swipe ─────────────────────────────────────
  onTouchStart(e) {
    this.touchStartX = e.changedTouches[0].clientX;
  }
  onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(dx) > 48) {
      dx < 0 ? this.lightboxService.next() : this.lightboxService.prev();
    }
  }
  // ── Actions ───────────────────────────────────────────
  close() {
    this.lightboxService.close();
  }
  onOverlayClick() {
    this.close();
  }
  onImageClick(e) {
    e.stopPropagation();
    this.isZoomed = !this.isZoomed;
  }
  goTo(index, e) {
    e.stopPropagation();
    this.lightboxService.goTo(index);
  }
  navigate(dir, e) {
    e.stopPropagation();
    dir === 1 ? this.lightboxService.next() : this.lightboxService.prev();
  }
  onImageLoad() {
    this.isLoaded = true;
    this.cdr.markForCheck();
  }
  static \u0275fac = function LightboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LightboxComponent)(\u0275\u0275directiveInject(LightboxService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LightboxComponent, selectors: [["app-lightbox"]], hostBindings: function LightboxComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function LightboxComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEsc();
      }, false, \u0275\u0275resolveDocument)("keydown.arrowleft", function LightboxComponent_keydown_arrowleft_HostBindingHandler() {
        return ctx.onLeft();
      }, false, \u0275\u0275resolveDocument)("keydown.arrowright", function LightboxComponent_keydown_arrowright_HostBindingHandler() {
        return ctx.onRight();
      }, false, \u0275\u0275resolveDocument)("touchstart", function LightboxComponent_touchstart_HostBindingHandler($event) {
        return ctx.onTouchStart($event);
      })("touchend", function LightboxComponent_touchend_HostBindingHandler($event) {
        return ctx.onTouchEnd($event);
      });
    }
  }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "lb-backdrop", 3, "click"], [1, "lb-panel", 3, "click"], [1, "lb-topbar", 3, "click"], ["class", "lb-counter", 4, "ngIf"], [1, "lb-spacer"], [1, "lb-btn", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["title", "Close  Esc", 1, "lb-btn", "lb-btn--close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "lb-stage", 3, "click"], ["class", "lb-nav lb-nav--prev", "title", "Previous  \u2190", 3, "click", 4, "ngIf"], [1, "lb-img-wrap", 3, "click"], ["class", "lb-skeleton", 4, "ngIf"], ["draggable", "false", 1, "lb-img", 3, "load", "src", "alt"], ["class", "lb-zoom-hint", 4, "ngIf"], ["class", "lb-nav lb-nav--next", "title", "Next  \u2192", 3, "click", 4, "ngIf"], ["class", "lb-thumbs", 3, "click", 4, "ngIf"], ["class", "lb-caption", 3, "click", 4, "ngIf"], [1, "lb-counter"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["x1", "11", "y1", "8", "x2", "11", "y2", "14"], ["x1", "8", "y1", "11", "x2", "14", "y2", "11"], ["title", "Previous  \u2190", 1, "lb-nav", "lb-nav--prev", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "15 18 9 12 15 6"], [1, "lb-skeleton"], [1, "lb-zoom-hint"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["title", "Next  \u2192", 1, "lb-nav", "lb-nav--next", 3, "click"], ["points", "9 18 15 12 9 6"], [1, "lb-thumbs", 3, "click"], ["class", "lb-thumb", 3, "lb-thumb--active", "click", 4, "ngFor", "ngForOf"], [1, "lb-thumb", 3, "click"], ["draggable", "false", 3, "src", "alt"], [1, "lb-caption", 3, "click"]], template: function LightboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LightboxComponent_ng_container_0_Template, 22, 22, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.state);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.lb-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.94);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  z-index: 1000000;\n}\n.lb-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000001;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  overflow: hidden;\n}\n.lb-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.7) 0%,\n      transparent 100%);\n  position: relative;\n  z-index: 2;\n}\n.lb-counter[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  color: #71717a;\n  padding: 4px 10px;\n  background: rgba(9, 9, 11, 0.55);\n  border: 1px solid #27272a;\n  border-radius: 20px;\n}\n.lb-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lb-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  border: 1px solid rgba(63, 63, 70, 0.75);\n  background: rgba(9, 9, 11, 0.7);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: #a1a1aa;\n  cursor: pointer;\n  transition: all 160ms ease;\n  flex-shrink: 0;\n}\n.lb-btn[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  color: #fff;\n  background: rgba(127, 29, 29, 0.45);\n  box-shadow: 0 0 10px rgba(185, 28, 28, 0.25);\n}\n.lb-btn--active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  color: #fca5a5;\n  background: rgba(127, 29, 29, 0.35);\n}\n.lb-btn--close[_ngcontent-%COMP%]:hover {\n  background: rgba(185, 28, 28, 0.55);\n  color: #f87171;\n}\n.lb-stage[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 0 16px;\n  min-height: 0;\n  position: relative;\n  overflow: hidden;\n}\n.lb-nav[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 1px solid rgba(63, 63, 70, 0.8);\n  background: rgba(9, 9, 11, 0.65);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: #a1a1aa;\n  cursor: pointer;\n  transition: all 160ms ease;\n  z-index: 2;\n}\n.lb-nav[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n  color: #fff;\n  background: rgba(127, 29, 29, 0.5);\n  box-shadow: 0 0 16px rgba(185, 28, 28, 0.3);\n}\n@media (max-width: 600px) {\n  .lb-nav[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 40px;\n    height: 40px;\n    z-index: 3;\n  }\n  .lb-nav--prev[_ngcontent-%COMP%] {\n    left: 8px;\n  }\n  .lb-nav--next[_ngcontent-%COMP%] {\n    right: 8px;\n  }\n}\n.lb-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-in;\n  border-radius: 14px;\n  overflow: hidden;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, 0.04),\n    0 20px 70px rgba(0, 0, 0, 0.8),\n    0 0 30px rgba(185, 28, 28, 0.12);\n  max-width: calc(100vw - 160px);\n  max-height: calc(100vh - 180px);\n}\n.lb-img-wrap--zoomed[_ngcontent-%COMP%] {\n  cursor: zoom-out;\n  overflow: auto;\n  max-width: 95vw;\n  max-height: calc(100vh - 180px);\n  border-color: rgba(220, 38, 38, 0.45);\n  box-shadow:\n    0 0 0 1px rgba(220, 38, 38, 0.15),\n    0 20px 70px rgba(0, 0, 0, 0.8),\n    0 0 40px rgba(185, 28, 28, 0.25);\n}\n@media (max-width: 600px) {\n  .lb-img-wrap[_ngcontent-%COMP%] {\n    max-width: calc(100vw - 32px);\n    border-radius: 10px;\n  }\n}\n.lb-img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 86vw;\n  max-height: calc(100vh - 185px);\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  opacity: 0;\n  transition: opacity 240ms ease;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.lb-img--visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lb-img--zoomed[_ngcontent-%COMP%] {\n  max-width: none;\n  max-height: none;\n  transform: scale(1.85);\n  transform-origin: center center;\n  cursor: zoom-out;\n}\n@media (max-width: 600px) {\n  .lb-img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: calc(100vh - 220px);\n  }\n}\n.lb-skeleton[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  min-width: 220px;\n  min-height: 220px;\n  background:\n    linear-gradient(\n      90deg,\n      #18181b 25%,\n      #27272a 50%,\n      #18181b 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_lb-shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_lb-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.lb-zoom-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  border: 1px solid rgba(220, 38, 38, 0.3);\n  color: rgba(255, 255, 255, 0.7);\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 180ms;\n}\n.lb-img-wrap[_ngcontent-%COMP%]:hover   .lb-zoom-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lb-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 20px 16px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.65) 0%,\n      transparent 100%);\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.lb-thumbs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.lb-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 66px;\n  height: 66px;\n  border-radius: 9px;\n  overflow: hidden;\n  border: 2px solid #3f3f46;\n  background: #18181b;\n  cursor: pointer;\n  transition:\n    border-color 160ms,\n    transform 160ms,\n    box-shadow 160ms;\n  padding: 0;\n}\n.lb-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  opacity: 0.7;\n  transition: opacity 160ms;\n}\n.lb-thumb[_ngcontent-%COMP%]:hover {\n  border-color: #b91c1c;\n  transform: translateY(-2px);\n}\n.lb-thumb[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.lb-thumb--active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  transform: translateY(-3px);\n  box-shadow: 0 0 0 1px rgba(220, 38, 38, 0.2666666667), 0 4px 14px rgba(185, 28, 28, 0.4);\n}\n.lb-thumb--active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 600px) {\n  .lb-thumb[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n  }\n}\n.lb-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 3;\n  max-width: 80vw;\n  text-align: center;\n  font-size: 13px;\n  color: #a1a1aa;\n  background: rgba(9, 9, 11, 0.65);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  padding: 5px 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(63, 63, 70, 0.55);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n/*# sourceMappingURL=lightbox.component.css.map */'], data: { animation: [
    trigger("backdrop", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("220ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate("180ms ease-in", style({ opacity: 0 }))
      ])
    ]),
    trigger("panel", [
      transition(":enter", [
        style({ opacity: 0, transform: "scale(0.86)", filter: "blur(10px)" }),
        animate("300ms cubic-bezier(0.34, 1.56, 0.64, 1)", style({ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }))
      ]),
      transition(":leave", [
        animate("180ms ease-in", style({ opacity: 0, transform: "scale(0.92)", filter: "blur(4px)" }))
      ])
    ])
  ] }, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LightboxComponent, { className: "LightboxComponent" });
})();

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ] });
};

export {
  BannerComponent,
  HeaderComponent,
  FooterComponent,
  ChangeBackgroundDirective,
  RandomBackgroundDirective,
  CartModalComponent,
  LightboxComponent,
  SharedModule
};
//# sourceMappingURL=chunk-CBGNQ3LD.js.map
