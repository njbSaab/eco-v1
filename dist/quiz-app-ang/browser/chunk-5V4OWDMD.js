import {
  BannerComponent,
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
  NgIf,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AB3KI4M6.js";

// src/app/view/contacts/contacts/contacts.component.ts
function ContactsComponent_div_26_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "path", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.socials.twitter, \u0275\u0275sanitizeUrl);
  }
}
function ContactsComponent_div_26_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.socials.linkedin, \u0275\u0275sanitizeUrl);
  }
}
function ContactsComponent_div_26_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.socials.facebook, \u0275\u0275sanitizeUrl);
  }
}
function ContactsComponent_div_26_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.socials.instagram, \u0275\u0275sanitizeUrl);
  }
}
function ContactsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h3", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275template(4, ContactsComponent_div_26_a_4_Template, 3, 1, "a", 34)(5, ContactsComponent_div_26_a_5_Template, 3, 1, "a", 34)(6, ContactsComponent_div_26_a_6_Template, 3, 1, "a", 34)(7, ContactsComponent_div_26_a_7_Template, 3, 1, "a", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.data == null ? null : ctx_r0.data.socialsTitle) || "Social Media...");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.socials.twitter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.socials.linkedin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.socials.facebook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.socials.instagram);
  }
}
var ContactsComponent = class _ContactsComponent {
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
    this.pagesService.getContacts().subscribe((page) => {
      this.page = page;
    });
    this.pagesService.getHome().subscribe((page) => {
      this.banner = page;
    });
  }
  get data() {
    return this.page?.content?.["contacts"];
  }
  get form() {
    return this.data?.form || {};
  }
  get socials() {
    return this.data?.socials || {};
  }
  static \u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactsComponent)(\u0275\u0275directiveInject(PagesService), \u0275\u0275directiveInject(ScrollTopService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["app-contacts"]], decls: 46, vars: 15, consts: [[3, "quizCount", "page"], [1, "contact", "mt-0", "mb-8", "md:my-8"], [1, "container", "px-6", "py-12", "mx-auto"], [1, "lg:flex", "lg:items-center", "lg:-mx-6"], [1, "lg:w-1/2", "lg:mx-6"], [1, "text-2xl", "capitalize", "lg:text-3xl", "font-semibold", "tracking-tight", "cursor-pointer"], [1, "bg-gradient-to-r", "from-zinc-200", "via-red-500", "to-zinc-100", "bg-clip-text", "text-transparent"], [1, "mt-6", "space-y-8", "md:mt-8"], [1, "flex", "items-start", "-mx-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "w-6", "h-6", "mx-2", "text-cyan-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "mx-2", "truncate", "w-72", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "mx-2", "text-cyan-500"], ["fill", "#06b6d4", "d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"], ["fill", "#06b6d4", "d", "M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["class", "mt-6 w-80 md:mt-8", 4, "ngIf"], [1, "mt-8", "lg:w-1/2", "lg:mx-6"], [1, "w-full", "px-8", "py-10", "mx-auto", "overflow-hidden", "rounded-lg", "shadow-2xl", "bg-gradient-blue-180", "bg-shadow-cayn", "lg:max-w-xl"], [1, "text-lg", "font-medium", "text-white"], [1, "mt-6"], [1, "flex-1"], [1, "block", "mb-2", "text-sm", "text-gray-200"], ["type", "text", 1, "block", "w-full", "px-5", "py-3", "mt-2", "text-gray-700", "placeholder-gray-400", "border", "border-gray-200", "rounded-md", "placeholder-gray-600", "bg-gray-900", "border-gray-700", "focus:border-cyan-400", "focus:ring-cyan-400", "focus:outline-none", "focus:ring", "focus:ring-opacity-40", "text-cyan-400", 3, "placeholder"], [1, "flex-1", "mt-6"], [1, "block", "mb-2", "text-sm", "text-gray-600", "dark:text-gray-200"], ["type", "email", 1, "block", "w-full", "px-5", "py-3", "mt-2", "text-gray-700", "placeholder-gray-400", "border", "border-gray-200", "rounded-md", "placeholder-gray-600", "bg-gray-900", "border-gray-700", "focus:border-cyan-400", "focus:ring-cyan-400", "focus:outline-none", "focus:ring", "focus:ring-opacity-40", "text-cyan-400", 3, "placeholder"], [1, "w-full", "mt-6"], [1, "block", "w-full", "px-5", "py-3", "mt-2", "text-gray-700", "placeholder-gray-400", "border", "border-gray-200", "rounded-md", "placeholder-gray-600", "bg-gray-900", "border-gray-700", "focus:border-cyan-400", "focus:ring-cyan-400", "focus:outline-none", "focus:ring", "focus:ring-opacity-40", "text-cyan-400", "h-[100px]", "md:h-[150px]", 3, "placeholder"], ["type", "submit", 1, "flex", "w-fit", "mx-auto", "mt-6", "items-center", "justify-center", "rounded-2xl", "px-5", "py-3", "text-sm", "sm:text-base", "font-semibold", "bg-gradient-to-r", "from-zinc-900", "via-red-700", "to-zinc-800", "text-white", "shadow-lg", "shadow-red-700/30", "hover:opacity-95", "transition"], [1, "mt-6", "w-80", "md:mt-8"], [1, "dark:text-gray-300"], [1, "flex", "mt-4", "-mx-1.5"], ["target", "_blank", "class", "mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-red-500", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "mx-1.5", "text-gray-400", "transition-colors", "duration-300", "transform", "hover:text-red-500", 3, "href"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-10", "h-10", "fill-current"], ["d", "M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235  prenot11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-8", "h-8"], ["d", "M15.2 8.8a4.8 4.8 0 0 1 4.8 4.8V19.2h-3.2v-5.6a1.6 1.6 0 0 0-3.2 0V19.2h-3.2v-9.6h3.2v1.44a3.21 3.21 0 0 1 2.88-1.6zM7.2 9.6H4v9.6h3.2V9.6zM5.6 4a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2z"], ["d", "M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"], ["d", "M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"]], template: function ContactsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-banner", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5)(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "p", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10)(12, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "span", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 13);
      \u0275\u0275element(17, "path", 14)(18, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "span", 12);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 9);
      \u0275\u0275element(23, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "span", 12);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(26, ContactsComponent_div_26_Template, 8, 5, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 18)(28, "div", 19)(29, "h1", 20);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "form", 21)(32, "div", 22)(33, "label", 23);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 25)(37, "label", 26);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 28)(41, "label", 26);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "textarea", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 30);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("quizCount", ctx.quizCount)("page", ctx.banner);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", (ctx.data == null ? null : ctx.data.title) || "We're always ready to listen...", " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((ctx.data == null ? null : ctx.data.address) || "VoteVibe");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", (ctx.data == null ? null : ctx.data.workingHours) || "Monday to Friday, 10:00\u201318:00 (GMT+7)", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", (ctx.data == null ? null : ctx.data.email) || "hello@votevibe.club", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.socials);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.form.title || "Leave Us a Message");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.form.nameLabel || "\u59D3\u540D\uFF08\u5FC5\u586B\uFF09");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.form.namePlaceholder || "John Doe");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.form.emailLabel || "Name (required)");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.form.emailPlaceholder || "johndoe@example.com");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.form.messageLabel || "Email (required)");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.form.messagePlaceholder || "\u8ACB\u5728\u6B64\u8F38\u5165\u60A8\u7684\u8A0A\u606F...");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.form.submitButton || "Send", " ");
    }
  }, dependencies: [NgIf, BannerComponent], styles: ["\n\n.contatcts[_ngcontent-%COMP%]   .contacts-wrapper[_ngcontent-%COMP%] {\n  height: 500px;\n}\n.contatcts[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=contacts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent" });
})();

// src/app/view/contacts/contacts.module.ts
var routes = [
  { path: "", component: ContactsComponent }
];
var ContactsModule = class _ContactsModule {
  static \u0275fac = function ContactsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ] });
};

export {
  ContactsModule
};
//# sourceMappingURL=chunk-5V4OWDMD.js.map
