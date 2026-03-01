import {
  QuizService
} from "./chunk-TCNXBHNC.js";
import {
  UserService
} from "./chunk-I5K44JZT.js";
import {
  ChangeBackgroundDirective,
  RandomBackgroundDirective,
  SharedModule
} from "./chunk-CBGNQ3LD.js";
import {
  animate,
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
  ActivatedRoute,
  BehaviorSubject,
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  Subject,
  __async,
  interval,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AB3KI4M6.js";

// src/app/core/services/quiz-state.service.ts
var QuizStateService = class _QuizStateService {
  // Состояние
  currentQuestionIndexSubject = new BehaviorSubject(0);
  correctAnswersCountSubject = new BehaviorSubject(0);
  totalPointsSubject = new BehaviorSubject(0);
  answersSubject = new BehaviorSubject([]);
  isFinishedSubject = new BehaviorSubject(false);
  // Публичные observables
  currentQuestionIndex$ = this.currentQuestionIndexSubject.asObservable();
  correctAnswersCount$ = this.correctAnswersCountSubject.asObservable();
  totalPoints$ = this.totalPointsSubject.asObservable();
  answers$ = this.answersSubject.asObservable();
  isFinished$ = this.isFinishedSubject.asObservable();
  totalQuestions = 0;
  // ────────────────────────────────────────────────────────────
  // ГЕТТЕРЫ
  // ────────────────────────────────────────────────────────────
  get currentQuestionIndex() {
    return this.currentQuestionIndexSubject.value;
  }
  get correctAnswersCount() {
    return this.correctAnswersCountSubject.value;
  }
  get totalPoints() {
    return this.totalPointsSubject.value;
  }
  get answers() {
    return this.answersSubject.value;
  }
  get isFinished() {
    return this.isFinishedSubject.value;
  }
  // ────────────────────────────────────────────────────────────
  // ИНИЦИАЛИЗАЦИЯ
  // ────────────────────────────────────────────────────────────
  initialize(totalQuestions, savedState) {
    this.totalQuestions = totalQuestions;
    if (savedState) {
      this.currentQuestionIndexSubject.next(savedState.currentQuestionIndex);
      this.correctAnswersCountSubject.next(savedState.correctAnswersCount);
      this.totalPointsSubject.next(savedState.totalPoints);
      this.answersSubject.next(savedState.answers);
      this.isFinishedSubject.next(savedState.currentQuestionIndex >= totalQuestions);
    } else {
      this.reset();
    }
  }
  // ────────────────────────────────────────────────────────────
  // ДЕЙСТВИЯ
  // ────────────────────────────────────────────────────────────
  /**
   * Обработать ответ на вопрос
   */
  processAnswer(question, answer) {
    console.log("\u{1F3AF} [QuizStateService] \u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0442\u0432\u0435\u0442\u0430:", {
      questionId: question.id,
      answerId: answer.id,
      isCorrect: answer.isCorrect,
      points: answer.points
    });
    const newAnswers = [...this.answers, {
      questionId: question.id,
      answerId: answer.id
    }];
    this.answersSubject.next(newAnswers);
    if (answer.isCorrect) {
      this.correctAnswersCountSubject.next(this.correctAnswersCount + 1);
      this.totalPointsSubject.next(this.totalPoints + (answer.points || 1));
    }
    console.log("\u{1F4CA} [QuizStateService] \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0434\u043E nextQuestion:", {
      currentIndex: this.currentQuestionIndex,
      totalQuestions: this.totalQuestions,
      answersCount: newAnswers.length
    });
    this.nextQuestion();
  }
  /**
   * Перейти к следующему вопросу
   */
  nextQuestion() {
    const nextIndex = this.currentQuestionIndex + 1;
    this.currentQuestionIndexSubject.next(nextIndex);
    console.log("\u27A1\uFE0F [QuizStateService] \u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0443:", {
      nextIndex,
      totalQuestions: this.totalQuestions,
      isFinished: nextIndex >= this.totalQuestions
    });
    if (nextIndex >= this.totalQuestions) {
      this.isFinishedSubject.next(true);
      console.log("\u{1F3C1} [QuizStateService] \u041A\u0432\u0438\u0437 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D!");
    }
  }
  /**
   * Пропустить вопрос (таймаут)
   */
  skipQuestion(questionId) {
    const newAnswers = [...this.answers, {
      questionId,
      answerId: null
    }];
    this.answersSubject.next(newAnswers);
    this.nextQuestion();
  }
  /**
   * Сбросить состояние
   */
  reset() {
    this.currentQuestionIndexSubject.next(0);
    this.correctAnswersCountSubject.next(0);
    this.totalPointsSubject.next(0);
    this.answersSubject.next([]);
    this.isFinishedSubject.next(false);
  }
  /**
   * Получить текущее состояние для сохранения
   */
  getState() {
    return {
      currentQuestionIndex: this.currentQuestionIndex,
      correctAnswersCount: this.correctAnswersCount,
      totalPoints: this.totalPoints,
      answers: this.answers
    };
  }
  static \u0275fac = function QuizStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizStateService, factory: _QuizStateService.\u0275fac });
};

// src/app/core/services/quiz-storage.service.ts
var QuizStorageService = class _QuizStorageService {
  getKey(quizId, key) {
    return `quiz_${quizId}_${key}`;
  }
  // ────────────────────────────────────────────────────────────
  // СОХРАНЕНИЕ
  // ────────────────────────────────────────────────────────────
  saveProgress(quizId, data) {
    localStorage.setItem(this.getKey(quizId, "id"), quizId.toString());
    localStorage.setItem(this.getKey(quizId, "currentQuestionIndex"), data.currentQuestionIndex.toString());
    localStorage.setItem(this.getKey(quizId, "correctAnswersCount"), data.correctAnswersCount.toString());
    localStorage.setItem(this.getKey(quizId, "totalPoints"), data.totalPoints.toString());
    localStorage.setItem(this.getKey(quizId, "answers"), JSON.stringify(data.answers));
  }
  markCompleted(quizId) {
    localStorage.setItem(this.getKey(quizId, "completed"), "true");
  }
  saveFinalResult(quizId, result) {
    localStorage.setItem(this.getKey(quizId, "final_result"), JSON.stringify(result));
  }
  // ────────────────────────────────────────────────────────────
  // ЗАГРУЗКА
  // ────────────────────────────────────────────────────────────
  loadProgress(quizId) {
    const storedQuizId = localStorage.getItem(this.getKey(quizId, "id"));
    if (storedQuizId !== quizId.toString()) {
      return null;
    }
    const index = localStorage.getItem(this.getKey(quizId, "currentQuestionIndex"));
    const correct = localStorage.getItem(this.getKey(quizId, "correctAnswersCount"));
    const points = localStorage.getItem(this.getKey(quizId, "totalPoints"));
    const answers = localStorage.getItem(this.getKey(quizId, "answers"));
    return {
      currentQuestionIndex: index ? +index : 0,
      correctAnswersCount: correct ? +correct : 0,
      totalPoints: points ? +points : 0,
      answers: answers ? JSON.parse(answers) : []
    };
  }
  isCompleted(quizId) {
    return localStorage.getItem(this.getKey(quizId, "completed")) === "true";
  }
  // ────────────────────────────────────────────────────────────
  // ОЧИСТКА
  // ────────────────────────────────────────────────────────────
  clearProgress(quizId) {
    localStorage.removeItem(this.getKey(quizId, "currentQuestionIndex"));
    localStorage.removeItem(this.getKey(quizId, "correctAnswersCount"));
    localStorage.removeItem(this.getKey(quizId, "totalPoints"));
    localStorage.removeItem(this.getKey(quizId, "answers"));
    localStorage.removeItem(this.getKey(quizId, "completed"));
  }
  clearAll(quizId) {
    this.clearProgress(quizId);
    localStorage.removeItem(this.getKey(quizId, "id"));
    localStorage.removeItem(this.getKey(quizId, "final_result"));
  }
  static \u0275fac = function QuizStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizStorageService, factory: _QuizStorageService.\u0275fac });
};

// src/app/core/services/timer.service.ts
var TimerService = class _TimerService {
  timerSubscription = null;
  totalTime = 30;
  // Время в секундах
  // Текущее время и прогресс
  currentTime$ = new BehaviorSubject(this.totalTime);
  progress$ = new BehaviorSubject(0);
  // Запуск таймера
  startTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    const progressInterval = 100;
    const totalSteps = this.totalTime * (1e3 / progressInterval);
    let elapsedSteps = 0;
    this.currentTime$.next(this.totalTime);
    this.progress$.next(0);
    this.timerSubscription = interval(progressInterval).subscribe(() => {
      elapsedSteps++;
      const remainingTime = this.totalTime - Math.floor(elapsedSteps * progressInterval / 1e3);
      const progress = elapsedSteps / totalSteps * 100;
      this.currentTime$.next(remainingTime);
      this.progress$.next(progress);
      if (remainingTime <= 0) {
        this.timerSubscription?.unsubscribe();
        this.timerSubscription = null;
      }
    });
  }
  // Сброс таймера
  resetTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
    this.currentTime$.next(this.totalTime);
    this.progress$.next(0);
  }
  // Остановка таймера
  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }
  static \u0275fac = function TimerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimerService, factory: _TimerService.\u0275fac, providedIn: "root" });
};

// src/app/core/services/layout.service.ts
var LayoutService = class _LayoutService {
  // Приватное поле с подчёркиванием — стандартная практика
  _showHeaderFooter = new BehaviorSubject(true);
  // Публичный стрим для подписки
  showHeaderFooter$ = this._showHeaderFooter.asObservable();
  // Метод скрытия
  hideHeaderFooter() {
    this._showHeaderFooter.next(false);
  }
  // Метод показа
  showHeaderFooter() {
    this._showHeaderFooter.next(true);
  }
  // Опционально: получить текущее значение синхронно
  getHeaderFooterVisible() {
    return this._showHeaderFooter.value;
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};

// src/app/view/quiz-play/quiz-finished/quiz-finished.component.ts
function QuizFinishedComponent_img_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
}
function QuizFinishedComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.quiz.finalPage, \u0275\u0275sanitizeHtml);
  }
}
var QuizFinishedComponent = class _QuizFinishedComponent {
  pagesService;
  quiz;
  reset = new EventEmitter();
  getResults = new EventEmitter();
  text = {};
  constructor(pagesService) {
    this.pagesService = pagesService;
  }
  ngOnInit() {
    this.pagesService.getPage("thanks").subscribe((page) => {
      this.text = page.content?.["finished"] || {};
    });
  }
  static \u0275fac = function QuizFinishedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizFinishedComponent)(\u0275\u0275directiveInject(PagesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizFinishedComponent, selectors: [["app-quiz-finished"]], inputs: { quiz: "quiz" }, outputs: { reset: "reset", getResults: "getResults" }, decls: 20, vars: 9, consts: [[1, "text-center", "overflow-hidden", "mx-w-1024", "font-medium"], [1, "wrapper", "relative", "flex", "w-fit", "mx-auto", "justify-center", "items-center", "gap-[20px]"], [1, "navbar-start", "w-fit", "cursor-pointer"], [1, "w-[55px]", "md:w-[70px]", 3, "src", "alt"], [1, "navbar-center", "flex-1", "justify-center"], [1, "text-3xl", "md:text-[2.1rem]", "font-semibold", "tracking-tight", "cursor-pointer"], [1, "bg-gradient-to-r", "from-zinc-200", "via-red-500", "to-zinc-100", "bg-clip-text", "text-transparent"], [1, "text-2xl", "md:text-3xl", "pt-10", "pb-5", "relative", "z-10", "confity-img"], [1, "text-2xl", "md:text-3xl"], ["class", "fixed confity", "src", "https://cdn.pixabay.com/animation/2024/05/02/07/43/07-43-00-535_512.gif", "alt", "Confetti", 4, "ngIf"], ["class", "text-lg md:text-xl text-gray-300 mb-8", 3, "innerHTML", 4, "ngIf"], [1, "btn-grup", "flex", "flex-col", "gap-3", "max-w-[400px]", "mx-auto", "relative", "z-10"], [1, "btn", "btn-success", "text-2xl", "md:h-[60px]", "hover:scale-105", "transition", 3, "click"], [1, "btn", "btn-ghost", "rounded-[30px]", "hover:bg-base-200", "transition", 3, "click"], ["src", "https://cdn.pixabay.com/animation/2024/05/02/07/43/07-43-00-535_512.gif", "alt", "Confetti", 1, "fixed", "confity"], [1, "text-lg", "md:text-xl", "text-gray-300", "mb-8", 3, "innerHTML"]], template: function QuizFinishedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "span", 5)(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "h5", 7);
      \u0275\u0275text(9);
      \u0275\u0275element(10, "br");
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, QuizFinishedComponent_img_13_Template, 1, 0, "img", 9)(14, QuizFinishedComponent_p_14_Template, 1, 1, "p", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "button", 12);
      \u0275\u0275listener("click", function QuizFinishedComponent_Template_button_click_16_listener() {
        return ctx.getResults.emit();
      });
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 13);
      \u0275\u0275listener("click", function QuizFinishedComponent_Template_button_click_18_listener() {
        return ctx.reset.emit();
      });
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.text.logo || "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothe-brand-logo-%2C-fashion-dress-logo%2C-handm-design-template-5c168ab9c6b93914b233b9ae8214afbb_screen.jpg?ts=1676421143", \u0275\u0275sanitizeUrl)("alt", ctx.text.brandName || "VoteVibe");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.text.brandName || "VoteVibe", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.text.title || "Congratulations", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.text.subtitle || "You have successfully completed the test.", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.text.confetti !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.quiz == null ? null : ctx.quiz.finalPage);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.text.buttonResults || "Achievements", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.text.buttonRestart || "Refresh", " ");
    }
  }, dependencies: [NgIf], styles: ["\n\nh5.text-2xl[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n}\n@media (max-width: 768px) {\n  h5.text-2xl[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.wrapper[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=quiz-finished.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizFinishedComponent, { className: "QuizFinishedComponent" });
})();

// src/app/view/quiz-play/quiz-play/quiz-play.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "text-error": a0, "quiz-play-single4-erroe": a1, "text-primary-radial": a2, "quiz-play-single3": a3, "text-accent-radial": a4 });
var _c1 = (a0) => ({ delay: a0 });
var _c2 = (a0, a1) => ({ value: a0, params: a1 });
function QuizPlayComponent_div_0_div_4_ng_container_8_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const question_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("alt", "preload ", question_r1.id, "");
    \u0275\u0275property("src", question_r1.image, \u0275\u0275sanitizeUrl);
  }
}
function QuizPlayComponent_div_0_div_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QuizPlayComponent_div_0_div_4_ng_container_8_img_1_Template, 1, 3, "img", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const question_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r1.image);
  }
}
function QuizPlayComponent_div_0_div_4_img_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.currentQuestionImage, \u0275\u0275sanitizeUrl);
  }
}
function QuizPlayComponent_div_0_div_4_ul_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24);
    \u0275\u0275listener("click", function QuizPlayComponent_div_0_div_4_ul_13_li_1_Template_li_click_0_listener() {
      const answer_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onAnswerSelect(answer_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const answer_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275property("@answerItem", \u0275\u0275pureFunction2(4, _c2, i_r5, \u0275\u0275pureFunction1(2, _c1, i_r5 * 90)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", answer_r4.text, " ");
  }
}
function QuizPlayComponent_div_0_div_4_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 22);
    \u0275\u0275template(1, QuizPlayComponent_div_0_div_4_ul_13_li_1_Template, 2, 7, "li", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.questions[ctx_r1.currentQuestionIndex] == null ? null : ctx_r1.questions[ctx_r1.currentQuestionIndex].answers);
  }
}
function QuizPlayComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "span", 10);
    \u0275\u0275element(4, "span");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "div", 13);
    \u0275\u0275template(8, QuizPlayComponent_div_0_div_4_ng_container_8_Template, 2, 1, "ng-container", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275template(10, QuizPlayComponent_div_0_div_4_img_10_Template, 1, 1, "img", 16);
    \u0275\u0275elementStart(11, "h3", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(13, QuizPlayComponent_div_0_div_4_ul_13_Template, 2, 1, "ul", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@questionFadeIn", ctx_r1.currentQuestionIndex);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--value", ctx_r1.progress);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(10, _c0, ctx_r1.currentTime < 5, ctx_r1.currentTime < 5, ctx_r1.currentTime >= 5 && ctx_r1.currentTime < 10, ctx_r1.currentTime >= 5 && ctx_r1.currentTime < 10, ctx_r1.currentTime >= 10));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--value", ctx_r1.currentTime);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.questions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentQuestionImage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.questions[ctx_r1.currentQuestionIndex].text, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAnswerVisible && ctx_r1.currentQuestionIndex < ctx_r1.questions.length);
  }
}
function QuizPlayComponent_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-quiz-finished", 25);
    \u0275\u0275listener("reset", function QuizPlayComponent_div_0_ng_template_5_Template_app_quiz_finished_reset_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetProgress());
    })("getResults", function QuizPlayComponent_div_0_ng_template_5_Template_app_quiz_finished_getResults_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.getResults());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("quiz", ctx_r1.quiz);
  }
}
function QuizPlayComponent_div_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "span", 27)(2, "span", 28);
    \u0275\u0275elementEnd();
  }
}
function QuizPlayComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, QuizPlayComponent_div_0_div_4_Template, 14, 16, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizPlayComponent_div_0_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, QuizPlayComponent_div_0_ng_template_7_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const finished_r7 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.quiz.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentQuestionIndex < ctx_r1.questions.length)("ngIfElse", finished_r7);
  }
}
var QuizPlayComponent = class _QuizPlayComponent {
  quizService;
  route;
  timerService;
  userService;
  router;
  layoutService;
  scrollTop;
  quizState;
  quizStorage;
  quiz;
  questions = [];
  isAnswerVisible = true;
  currentTime = 30;
  progress = 0;
  currentQuestionIndex$;
  isFinished$;
  destroy$ = new Subject();
  sessionCreated = false;
  constructor(quizService, route, timerService, userService, router, layoutService, scrollTop, quizState, quizStorage) {
    this.quizService = quizService;
    this.route = route;
    this.timerService = timerService;
    this.userService = userService;
    this.router = router;
    this.layoutService = layoutService;
    this.scrollTop = scrollTop;
    this.quizState = quizState;
    this.quizStorage = quizStorage;
    this.currentQuestionIndex$ = this.quizState.currentQuestionIndex$;
    this.isFinished$ = this.quizState.isFinished$;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.scrollTop.toTop();
      this.layoutService.hideHeaderFooter();
      const quizId = Number(this.route.snapshot.paramMap.get("id"));
      this.quizService.getQuizById(quizId).subscribe({
        next: (quiz) => __async(this, null, function* () {
          if (!quiz || !quiz.questions.every((q) => q.answers && q.answers.length > 0)) {
            console.error("\u274C \u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043A\u0432\u0438\u0437");
            this.router.navigate(["/quizzes"]);
            return;
          }
          this.quiz = quiz;
          this.questions = quiz.questions;
          this.preloadImages();
          const savedState = this.quizStorage.loadProgress(quizId);
          this.quizState.initialize(this.questions.length, savedState || void 0);
          this.subscribeToState(quizId);
          if (!this.sessionCreated && !savedState) {
            yield this.createSession(quizId);
            this.sessionCreated = true;
          }
          if (!this.quizState.isFinished) {
            this.timerService.startTimer();
          }
        }),
        error: (error) => {
          console.error("\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u0432\u0438\u0437\u0430:", error);
          this.router.navigate(["/quizzes"]);
        }
      });
      this.timerService.currentTime$.pipe(takeUntil(this.destroy$)).subscribe((time) => {
        this.currentTime = time;
        if (time <= 0 && !this.quizState.isFinished) {
          this.onTimeExpired();
        }
      });
      this.timerService.progress$.pipe(takeUntil(this.destroy$)).subscribe((progress) => this.progress = progress);
    });
  }
  get currentQuestionImage() {
    const currentQ = this.questions[this.currentQuestionIndex];
    return currentQ?.image || null;
  }
  ngOnDestroy() {
    this.layoutService.showHeaderFooter();
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ────────────────────────────────────────────────────────────
  // ОБРАБОТКА ОТВЕТОВ
  // ────────────────────────────────────────────────────────────
  onAnswerSelect(answer) {
    const currentQuestion = this.questions[this.quizState.currentQuestionIndex];
    console.log("\u2705 \u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442:", answer);
    console.log("\u{1F4CA} \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441:", currentQuestion);
    this.quizState.processAnswer(currentQuestion, answer);
    console.log("\u{1F4C8} \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430:", {
      currentQuestionIndex: this.quizState.currentQuestionIndex,
      isFinished: this.quizState.isFinished,
      totalQuestions: this.questions.length
    });
    this.saveProgress();
    this.timerService.stopTimer();
    this.isAnswerVisible = false;
    setTimeout(() => {
      if (!this.quizState.isFinished) {
        console.log("\u27A1\uFE0F \u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u0432\u043E\u043F\u0440\u043E\u0441\u0443");
        this.timerService.startTimer();
        this.isAnswerVisible = true;
      } else {
        console.log("\u{1F3C1} \u041A\u0432\u0438\u0437 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D, \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u043C onQuizFinished()");
        this.onQuizFinished();
      }
    }, 500);
  }
  onTimeExpired() {
    const currentQuestion = this.questions[this.quizState.currentQuestionIndex];
    this.quizState.skipQuestion(currentQuestion.id);
    this.saveProgress();
    this.timerService.stopTimer();
    this.isAnswerVisible = false;
    setTimeout(() => {
      if (!this.quizState.isFinished) {
        this.timerService.startTimer();
        this.isAnswerVisible = true;
      } else {
        this.onQuizFinished();
      }
    }, 500);
  }
  // ────────────────────────────────────────────────────────────
  // СОХРАНЕНИЕ
  // ────────────────────────────────────────────────────────────
  saveProgress() {
    if (!this.quiz)
      return;
    const state = this.quizState.getState();
    this.quizStorage.saveProgress(this.quiz.id, state);
  }
  onQuizFinished() {
    return __async(this, null, function* () {
      if (!this.quiz)
        return;
      console.log("\u{1F3C1} \u041A\u0432\u0438\u0437 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D, \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432...");
      this.timerService.stopTimer();
      this.quizStorage.markCompleted(this.quiz.id);
      const finalResult = {
        quizId: this.quiz.id,
        score: this.quizState.totalPoints,
        correctAnswersCount: this.quizState.correctAnswersCount,
        totalQuestions: this.questions.length,
        answers: this.quizState.answers.filter((a) => a.answerId !== null)
      };
      console.log("\u{1F4E6} \u0424\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:", finalResult);
      this.quizStorage.saveFinalResult(this.quiz.id, finalResult);
      console.log("\u{1F4BE} \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B \u0432 localStorage");
      try {
        console.log("\u{1F4E4} \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440...");
        yield this.userService.addUserResult({
          quizId: this.quiz.id,
          score: this.quizState.totalPoints,
          answers: this.quizState.answers.filter((a) => a.answerId !== null),
          geo: "vn"
        });
        console.log("\u2705 \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043A\u0432\u0438\u0437\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440");
      } catch (error) {
        console.error("\u274C \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432:", error);
      }
      this.quizStorage.clearProgress(this.quiz.id);
      console.log("\u{1F5D1}\uFE0F \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043E\u0447\u0438\u0449\u0435\u043D");
    });
  }
  // ────────────────────────────────────────────────────────────
  // СОЗДАНИЕ СЕССИИ
  // ────────────────────────────────────────────────────────────
  createSession(quizId) {
    return __async(this, null, function* () {
      const browserInfo = yield this.userService.getBrowserInfo();
      yield this.userService.saveUserSession({
        quizId,
        currentQuestionIndex: 0,
        correctAnswersCount: 0,
        totalPoints: 0,
        answers: [],
        browserInfo
      });
      console.log("\u2705 \u0421\u0435\u0441\u0441\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0434\u043B\u044F \u043A\u0432\u0438\u0437\u0430", quizId);
    });
  }
  // ────────────────────────────────────────────────────────────
  // ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ
  // ────────────────────────────────────────────────────────────
  subscribeToState(quizId) {
    this.quizState.answers$.pipe(takeUntil(this.destroy$));
  }
  resetProgress() {
    if (!this.quiz)
      return;
    this.quizState.reset();
    this.quizStorage.clearAll(this.quiz.id);
    this.sessionCreated = false;
    this.timerService.startTimer();
    this.createSession(this.quiz.id);
  }
  getResults() {
    if (!this.quiz)
      return;
    this.router.navigate(["/quiz", this.quiz.id, "result"]);
  }
  preloadImages() {
    for (const q of this.questions) {
      if (!q.image)
        continue;
      const img = new Image();
      img.src = q.image;
    }
  }
  // ────────────────────────────────────────────────────────────
  // ГЕТТЕРЫ ДЛЯ ШАБЛОНА
  // ────────────────────────────────────────────────────────────
  get currentQuestionIndex() {
    return this.quizState.currentQuestionIndex;
  }
  get isFinished() {
    return this.quizState.isFinished;
  }
  static \u0275fac = function QuizPlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizPlayComponent)(\u0275\u0275directiveInject(QuizService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TimerService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(ScrollTopService), \u0275\u0275directiveInject(QuizStateService), \u0275\u0275directiveInject(QuizStorageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizPlayComponent, selectors: [["app-quiz-play"]], features: [\u0275\u0275ProvidersFeature([QuizStateService, QuizStorageService])], decls: 1, vars: 1, consts: [["finished", ""], ["notFound", ""], ["class", "quiz-play mx-w-1024", "appChangeBackground", "", 4, "ngIf"], ["appChangeBackground", "", 1, "quiz-play", "mx-w-1024"], [1, "container"], [1, "text-center", "text-3xl", "opacity-0"], ["class", "quiz-play-quistion flex flex-col items-center justify-center relative quiz-container pt-5", 4, "ngIf", "ngIfElse"], [1, "quiz-play-quistion", "flex", "flex-col", "items-center", "justify-center", "relative", "quiz-container", "pt-5"], [1, "timer-box"], ["role", "progressbar", 1, "radial-progress", "quiz-play-single", "z-10", 3, "ngClass"], [1, "countdown", "font-mono", "text-3xl"], [1, "quistion-text-wrapper", "w-full", "mb-4"], [1, "quistion-text-inner", "w-full", "relative"], [1, "hidden", "preload-container"], [4, "ngFor", "ngForOf"], [1, "quistion-text", "w-full", "relative", "min-h-[180px]"], ["class", "question-image w-full h-full object-cover transition-opacity duration-400", "alt", "Question illustration", 3, "src", 4, "ngIf"], [1, "text-center", "quiz-play-single-transparet-base", "question-text"], ["class", "quiz-play-answers-list quiz-container", 4, "ngIf"], [3, "src", "alt", 4, "ngIf"], [3, "src", "alt"], ["alt", "Question illustration", 1, "question-image", "w-full", "h-full", "object-cover", "transition-opacity", "duration-400", 3, "src"], [1, "quiz-play-answers-list", "quiz-container"], ["appRandomBackground", "", "class", "quiz-play-answers-item quiz-play-single-transparet-base2 flex items-center justify-center cursor-pointer text-center", 3, "click", 4, "ngFor", "ngForOf"], ["appRandomBackground", "", 1, "quiz-play-answers-item", "quiz-play-single-transparet-base2", "flex", "items-center", "justify-center", "cursor-pointer", "text-center", 3, "click"], [1, "h-[66dvh]", "flex", "items-center", "justify-center", 3, "reset", "getResults", "quiz"], [1, "loading-container", "text-center", "h-screen"], [1, "loading", "loading-ring", "text-red-400", "loading-lg"], [1, "loading", "loading-ring", "text-red-900", "loading-md"]], template: function QuizPlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, QuizPlayComponent_div_0_Template, 9, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.quiz);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, ChangeBackgroundDirective, RandomBackgroundDirective, QuizFinishedComponent], styles: ["\n\n.quiz-play[_ngcontent-%COMP%] {\n  min-height: 100dvh;\n  margin-top: 0px;\n  padding-top: 0px;\n  padding-bottom: 50px;\n  border-radius: 20px;\n}\n.quiz-play[_ngcontent-%COMP%]   .quiz-play-quistion[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 10px auto 20px;\n  border-radius: 20px;\n  min-height: 30dvh;\n}\n.quiz-play[_ngcontent-%COMP%]   .quistion-text-inner[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  overflow: hidden;\n}\n.quiz-play[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  font-size: 25px;\n  line-height: 1.2;\n  bottom: 0;\n  z-index: 10;\n  padding: 20px 10px;\n  border-radius: 24px;\n}\n.quiz-play[_ngcontent-%COMP%]   .quistion-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 50dvh;\n  object-fit: cover;\n}\n.quiz-play[_ngcontent-%COMP%]   .timer-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n}\n.quiz-play[_ngcontent-%COMP%]   .quiz-play-answers-list[_ngcontent-%COMP%] {\n  width: 95%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  gap: 10px;\n}\n.quiz-play[_ngcontent-%COMP%]   .quiz-play-answers-item[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 20px 5px;\n}\n.quiz-play[_ngcontent-%COMP%]   .text-accent-radial[_ngcontent-%COMP%] {\n  color: #67e8f9 !important;\n}\n.quiz-play[_ngcontent-%COMP%]   .text-primary-radial[_ngcontent-%COMP%] {\n  color: #077bd3 !important;\n}\n.question-image[_ngcontent-%COMP%] {\n  transition: opacity 0.4s ease-in-out;\n}\n.question-image.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n@media screen and (max-width: 1024px) {\n  .quiz-play[_ngcontent-%COMP%] {\n    margin-top: -12.5px;\n    padding-top: 0 !important;\n  }\n  .quiz-play[_ngcontent-%COMP%]   .quiz-play-answers-item[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    padding: 10px 5px;\n    line-height: 1.3;\n    min-height: 61px;\n  }\n  .quiz-play[_ngcontent-%COMP%]   .quiz-play-answers-list[_ngcontent-%COMP%] {\n    gap: 7.5px;\n  }\n  .quiz-play[_ngcontent-%COMP%]   .quiz-play-quistion[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 20px auto 12px;\n    border-radius: 20px;\n    min-height: 30dvh;\n  }\n}\n@media screen and (max-width: 768px) {\n  .quiz-play-quistion[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: center;\n    line-height: 1.2;\n  }\n}\n/*# sourceMappingURL=quiz-play.component.css.map */"], data: { animation: [
    trigger("questionFadeIn", [
      transition(":increment", [
        style({ opacity: 0, transform: "translateY(-30px)" }),
        animate("500ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))
      ])
    ]),
    trigger("answerItem", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(30px) scale(0.92)" }),
        animate("{{delay}}ms ease-out", style({ opacity: 1, transform: "translateY(0) scale(1)" }))
      ], { params: { delay: 0 } })
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizPlayComponent, { className: "QuizPlayComponent" });
})();

// src/app/view/quiz-play/quiz-play.module.ts
var routes = [
  { path: "", component: QuizPlayComponent }
];
var QuizPlayModule = class _QuizPlayModule {
  static \u0275fac = function QuizPlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizPlayModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _QuizPlayModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    RouterModule
  ] });
};

export {
  LayoutService,
  QuizPlayModule
};
//# sourceMappingURL=chunk-AT5IXEHD.js.map
