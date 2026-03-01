import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  DOCUMENT,
  Inject,
  Injectable,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AB3KI4M6.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
function query(selector, animation, options = null) {
  return {
    type: AnimationMetadataType.Query,
    selector,
    animation,
    options
  };
}
function stagger(timings, animation) {
  return {
    type: AnimationMetadataType.Stagger,
    timings,
    animation
  };
}
var AnimationBuilder = class _AnimationBuilder {
  static {
    this.\u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnimationBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AnimationBuilder,
      factory: () => (() => inject(BrowserAnimationBuilder))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this.animationModuleType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static {
    this.\u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BrowserAnimationBuilder,
      factory: _BrowserAnimationBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var NoopAnimationPlayer = class {
  constructor(duration = 0, delay = 0) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this._started = false;
    this._destroyed = false;
    this._finished = false;
    this._position = 0;
    this.parentPlayer = null;
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  constructor(_players) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._onDestroyFns = [];
    this.parentPlayer = null;
    this.totalTime = 0;
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// src/app/core/services/favorites.service.ts
var STORAGE_KEY = "shop_favorites";
var FavoritesService = class _FavoritesService {
  _items$ = new BehaviorSubject(this.load());
  items$ = this._items$.asObservable();
  count$ = this._items$.pipe(map((items) => items.length));
  load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  }
  save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    this._items$.next(items);
  }
  toggle(quiz) {
    const items = this._items$.getValue();
    if (items.some((i) => i.id === quiz.id)) {
      this.save(items.filter((i) => i.id !== quiz.id));
    } else {
      this.save([...items, quiz]);
    }
  }
  remove(id) {
    this.save(this._items$.getValue().filter((i) => i.id !== id));
  }
  isFavorite(id) {
    return this._items$.getValue().some((i) => i.id === id);
  }
  static \u0275fac = function FavoritesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FavoritesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FavoritesService, factory: _FavoritesService.\u0275fac, providedIn: "root" });
};

// src/app/core/services/cart.service.ts
var STORAGE_KEY2 = "shop_cart";
var CartService = class _CartService {
  _items$ = new BehaviorSubject(this.load());
  items$ = this._items$.asObservable();
  count$ = this._items$.pipe(map((items) => items.reduce((s, i) => s + i.quantity, 0)));
  load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY2) || "[]");
    } catch {
      return [];
    }
  }
  save(items) {
    localStorage.setItem(STORAGE_KEY2, JSON.stringify(items));
    this._items$.next(items);
  }
  add(quiz) {
    const items = this._items$.getValue();
    const existing = items.find((i) => i.quiz.id === quiz.id);
    if (existing) {
      this.save(items.map((i) => i.quiz.id === quiz.id ? __spreadProps(__spreadValues({}, i), { quantity: i.quantity + 1 }) : i));
    } else {
      this.save([...items, { quiz, quantity: 1 }]);
    }
  }
  remove(id) {
    this.save(this._items$.getValue().filter((i) => i.quiz.id !== id));
  }
  updateQuantity(id, qty) {
    if (qty < 1) {
      this.remove(id);
      return;
    }
    this.save(this._items$.getValue().map((i) => i.quiz.id === id ? __spreadProps(__spreadValues({}, i), { quantity: qty }) : i));
  }
  clear() {
    this.save([]);
  }
  isInCart(id) {
    return this._items$.getValue().some((i) => i.quiz.id === id);
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};

// src/app/core/services/cart-modal.service.ts
var CartModalService = class _CartModalService {
  isOpen$ = new BehaviorSubject(false);
  activeTab$ = new BehaviorSubject("cart");
  open(tab = "cart") {
    this.activeTab$.next(tab);
    this.isOpen$.next(true);
  }
  close() {
    this.isOpen$.next(false);
  }
  toggle() {
    this.isOpen$.next(!this.isOpen$.getValue());
  }
  static \u0275fac = function CartModalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartModalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartModalService, factory: _CartModalService.\u0275fac, providedIn: "root" });
};

// src/app/core/services/lightbox.service.ts
var LightboxService = class _LightboxService {
  _state$ = new BehaviorSubject(null);
  state$ = this._state$.asObservable();
  open(images, index = 0, alt = "") {
    this._state$.next({ images, index, alt });
  }
  close() {
    this._state$.next(null);
  }
  next() {
    const s = this._state$.getValue();
    if (!s || s.images.length <= 1)
      return;
    this._state$.next(__spreadProps(__spreadValues({}, s), { index: (s.index + 1) % s.images.length }));
  }
  prev() {
    const s = this._state$.getValue();
    if (!s || s.images.length <= 1)
      return;
    this._state$.next(__spreadProps(__spreadValues({}, s), { index: (s.index - 1 + s.images.length) % s.images.length }));
  }
  goTo(index) {
    const s = this._state$.getValue();
    if (!s)
      return;
    this._state$.next(__spreadProps(__spreadValues({}, s), { index }));
  }
  static \u0275fac = function LightboxService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LightboxService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LightboxService, factory: _LightboxService.\u0275fac, providedIn: "root" });
};

export {
  AnimationMetadataType,
  AUTO_STYLE,
  trigger,
  animate,
  sequence,
  style,
  transition,
  query,
  stagger,
  NoopAnimationPlayer,
  AnimationGroupPlayer,
  ɵPRE_STYLE,
  FavoritesService,
  CartService,
  CartModalService,
  LightboxService
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v18.2.13
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-TIREVR5C.js.map
