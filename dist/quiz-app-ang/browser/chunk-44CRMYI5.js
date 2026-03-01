import {
  ɵɵdefineInjectable
} from "./chunk-AB3KI4M6.js";

// src/app/core/services/scroll-top.service.ts
var ScrollTopService = class _ScrollTopService {
  /** Прокрутка к верху с плавной анимацией (500мс) */
  toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  /** Мгновенная прокрутка (если нужна жёсткая) */
  toTopInstant() {
    window.scrollTo(0, 0);
  }
  static \u0275fac = function ScrollTopService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollTopService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrollTopService, factory: _ScrollTopService.\u0275fac, providedIn: "root" });
};

export {
  ScrollTopService
};
//# sourceMappingURL=chunk-44CRMYI5.js.map
