import {
  HttpClient,
  catchError,
  environment,
  map,
  of,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AB3KI4M6.js";

// src/app/core/services/pages.service.ts
var PagesService = class _PagesService {
  http;
  apiUrl = environment.apiUrl + "/pages";
  cache = /* @__PURE__ */ new Map();
  constructor(http) {
    this.http = http;
  }
  /** Получить страницу по slug */
  getPage(slug) {
    if (this.cache.has(slug)) {
      return of(this.cache.get(slug));
    }
    return this.http.get(`${this.apiUrl}/${slug}`).pipe(
      map((response) => response.data),
      // 🎯 Извлекаем data из обертки
      map((page) => this.parseContent(page)),
      tap((page) => this.cache.set(slug, page)),
      catchError((err) => {
        console.error(`Page "${slug}" not found or error:`, err);
        const emptyPage = {
          id: 0,
          slug,
          title: "",
          content: {},
          isActive: false,
          createdAt: "",
          updatedAt: ""
        };
        this.cache.set(slug, emptyPage);
        return of(emptyPage);
      })
    );
  }
  /** Удобные алиасы */
  getHome() {
    return this.getPage("home");
  }
  getContacts() {
    return this.getPage("contacts");
  }
  getAbout() {
    return this.getPage("about");
  }
  getPrivacy() {
    return this.getPage("privacy");
  }
  getTerms() {
    return this.getPage("terms");
  }
  getFaq() {
    return this.getPage("faq");
  }
  /** Очистить кэш */
  clearCache() {
    this.cache.clear();
  }
  /** Парсим content, если он пришёл строкой */
  parseContent(page) {
    if (page.content && typeof page.content === "string") {
      try {
        page.content = JSON.parse(page.content);
      } catch (e) {
        console.warn(`Invalid JSON in page ${page.slug}`);
        page.content = {};
      }
    }
    return page;
  }
  static \u0275fac = function PagesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagesService, factory: _PagesService.\u0275fac, providedIn: "root" });
};

export {
  PagesService
};
//# sourceMappingURL=chunk-F6AG6VOS.js.map
