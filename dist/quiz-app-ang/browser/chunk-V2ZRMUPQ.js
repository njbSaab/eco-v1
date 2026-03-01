import {
  ReferralService,
  UserService
} from "./chunk-I5K44JZT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-XOE3LYJN.js";
import {
  PagesService
} from "./chunk-F6AG6VOS.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  NgIf,
  Router,
  RouterModule,
  Subject,
  __async,
  environment,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AB3KI4M6.js";

// src/app/view/quiz-result/quiz-result/quiz-result.component.ts
function QuizResultComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.text.nameError || "Enter your name", " ");
  }
}
function QuizResultComponent_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.text.emailError || "Please enter a valid email address.", " ");
  }
}
function QuizResultComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.text.codeError || "Please enter the verification code.", " ");
  }
}
function QuizResultComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.text.codeSuccess || "Verification code has been sent, please enter it here.", " ");
  }
}
function QuizResultComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("loading-lg", ctx_r0.isVerifying);
  }
}
function QuizResultComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isCodeVisible ? ctx_r0.text.buttonSubmit || "Verify Code" : ctx_r0.text.buttonContinue || "Continue", " ");
  }
}
function QuizResultComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Verifying code... ");
    \u0275\u0275elementEnd();
  }
}
function QuizResultComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 31);
    \u0275\u0275listener("click", function QuizResultComponent_div_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clickAfterSuccess());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", !ctx_r0.showSuccess)("opacity-100", ctx_r0.showSuccess);
    \u0275\u0275attribute("data-gtm-message", ctx_r0.alertMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.alertMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.text.closeButton || "Close", " ");
  }
}
function QuizResultComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275listener("click", function QuizResultComponent_div_33_Template_span_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showError = false);
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", !ctx_r0.showError)("opacity-100", ctx_r0.showError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.alertMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.text.closeButton || "Close", " ");
  }
}
var QuizResultComponent = class _QuizResultComponent {
  fb;
  userService;
  pagesService;
  route;
  router;
  http;
  referralService;
  myForm;
  isCodeVisible = false;
  isSubmitting = false;
  isVerifying = false;
  // 🎯 Новый флаг для защиты от множественных кликов
  encryptedCode = null;
  tempName = "";
  tempEmail = "";
  correctAnswersCount = 0;
  totalPoints = 0;
  currentQuestionIndex = 0;
  quizId;
  answers = [];
  // Алерты
  isVisableAlert = false;
  showSuccess = false;
  showError = false;
  alertMessage = "";
  textAlert = false;
  successCodeText = false;
  apiUrl = environment.apiUrl;
  destroy$ = new Subject();
  constructor(fb, userService, pagesService, route, router, http, referralService) {
    this.fb = fb;
    this.userService = userService;
    this.pagesService = pagesService;
    this.route = route;
    this.router = router;
    this.http = http;
    this.referralService = referralService;
    this.quizId = Number(this.route.snapshot.paramMap.get("id"));
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      code: [""]
    });
    this.loadQuizData();
    this.pagesService.getPage("form").pipe(takeUntil(this.destroy$)).subscribe((page) => {
      this.text = page.content?.["result"] || {};
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  text = {};
  loadQuizData() {
    const finalResult = localStorage.getItem(`quiz_${this.quizId}_final_result`);
    if (finalResult) {
      const result = JSON.parse(finalResult);
      this.correctAnswersCount = result.correctAnswersCount || 0;
      this.totalPoints = result.score || 0;
      this.answers = result.answers || [];
      console.log("\u{1F4E6} \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 localStorage:", result);
    } else {
      console.warn("\u26A0\uFE0F \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 localStorage \u0434\u043B\u044F \u043A\u0432\u0438\u0437\u0430", this.quizId);
    }
  }
  sendForm() {
    console.log("\u{1F4E7} [sendForm] \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043A\u043E\u0434\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438...");
    if (this.myForm.get("name")?.valid && this.myForm.get("email")?.valid) {
      this.isSubmitting = true;
      this.showError = false;
      this.tempName = this.myForm.get("name")?.value;
      this.tempEmail = this.myForm.get("email")?.value;
      this.http.post(`${this.apiUrl}/email/send-code`, {
        site_url: window.location.origin,
        email_user: this.tempEmail
      }).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          console.log("\u2705 [sendForm] \u041A\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D:", response);
          this.encryptedCode = response.data?.encrypted_code || response.encrypted_code;
          console.log("\u{1F511} [sendForm] encryptedCode:", this.encryptedCode);
          this.isCodeVisible = true;
          this.myForm.get("code")?.setValidators(Validators.required);
          this.myForm.get("code")?.updateValueAndValidity();
          this.successCodeText = true;
        },
        error: (err) => {
          console.error("\u274C [sendForm] \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043A\u043E\u0434\u0430:", err);
          this.showAlert("error", this.text.alertResendError || "\u54E6\uFF0C\u51FA\u932F\u4E86\uFF0C\u6211\u5011\u518D\u8A66\u4E00\u6B21\u3002");
        },
        complete: () => {
          this.isSubmitting = false;
          console.log("\u{1F3C1} [sendForm] \u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E");
        }
      });
    }
  }
  /**
   * Подтверждение кода и отправка данных
   */
  /**
   * Подтверждение кода и отправка данных
   * 🎯 ОПТИМИЗАЦИЯ: Сначала отправляем email, потом обновляем юзера в фоне
   */
  submitFinalForm() {
    return __async(this, null, function* () {
      console.log("\u{1F510} [submitFinalForm] \u041D\u0430\u0447\u0430\u043B\u043E \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u043A\u043E\u0434\u0430...");
      if (this.isVerifying) {
        console.warn("\u26A0\uFE0F [submitFinalForm] \u0423\u0436\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F, \u0432\u044B\u0445\u043E\u0434");
        return;
      }
      if (!this.myForm.valid || !this.encryptedCode || !this.tempName || !this.tempEmail) {
        console.warn("\u26A0\uFE0F [submitFinalForm] \u0412\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430");
        return;
      }
      this.isVerifying = true;
      this.isSubmitting = true;
      this.showError = false;
      const code = this.myForm.get("code")?.value;
      const rawSource = this.referralService.getFullQuery();
      try {
        console.log("\u{1F4E8} [submitFinalForm] \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 email \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438...");
        yield new Promise((resolve, reject) => {
          this.http.post(`${this.apiUrl}/email/verify`, {
            site_url: window.location.origin,
            email_user: this.tempEmail,
            encrypted_code: this.encryptedCode,
            code,
            name_user: this.tempName,
            session_id: this.userService.getSessionId(),
            ref_source: rawSource || void 0,
            quiz_id: this.quizId
          }).pipe(takeUntil(this.destroy$)).subscribe({
            next: (res) => {
              console.log("\u2705 [submitFinalForm] Email \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D:", res);
              resolve();
            },
            error: (err) => reject(err)
          });
        });
        console.log("\u2728 [submitFinalForm] \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C success popup");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submit_success",
          quiz_id: this.quizId,
          user_name: this.tempName,
          user_email: this.tempEmail,
          geo: "vn",
          action: "quiz_completed",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        localStorage.removeItem(`quiz_${this.quizId}_final_result`);
        localStorage.removeItem(`quiz_${this.quizId}_id`);
        this.showAlert("success", "\u8B1D\u8B1D\uFF01\u7D50\u679C\u5DF2\u5132\u5B58\u4E26\u767C\u9001\u5230\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6\u3002");
        console.log("\u{1F3AF} [submitFinalForm] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u044E\u0437\u0435\u0440\u0430 \u0432 \u0444\u043E\u043D\u0435...");
        this.updateUserInBackground(this.tempName, this.tempEmail);
      } catch (error) {
        console.error("\u274C [submitFinalForm] \u041E\u0448\u0438\u0431\u043A\u0430:", error);
        if (error.status === 400) {
          this.showAlert("error", "\u9A57\u8B49\u78BC\u932F\u8AA4\u3002\u8ACB\u518D\u8A66\u4E00\u6B21\u3002");
        } else {
          this.showAlert("error", "\u767C\u9001\u96FB\u5B50\u90F5\u4EF6\u6642\u767C\u751F\u932F\u8AA4\u3002\u8ACB\u518D\u8A66\u4E00\u6B21\u3002");
        }
      } finally {
        this.isVerifying = false;
        this.isSubmitting = false;
        console.log("\u{1F3C1} [submitFinalForm] \u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E");
      }
    });
  }
  /**
   * Обновить юзера в фоне (не блокирует UI)
   */
  updateUserInBackground(name, email) {
    this.userService.addUser({
      name,
      email,
      geo: "vn"
    }).then((addUserObservable) => {
      addUserObservable.pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          console.log("\u2705 [Background] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
        },
        error: (err) => {
          console.warn("\u26A0\uFE0F [Background] \u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u044E\u0437\u0435\u0440\u0430 (\u043D\u0435 \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E):", err);
        }
      });
    }).catch((err) => {
      console.warn("\u26A0\uFE0F [Background] \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F observable:", err);
    });
  }
  resendCode() {
    if (!this.tempEmail)
      return;
    this.isSubmitting = true;
    this.http.post(`${this.apiUrl}/email/send-code`, {
      site_url: window.location.origin,
      email_user: this.tempEmail
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.showAlert("success", this.text.alertCodeResent || "\u9A57\u8B49\u78BC\u5DF2\u91CD\u65B0\u767C\u9001\uFF01");
      },
      error: () => {
        this.showAlert("error", this.text.alertResendError || "\u7121\u6CD5\u91CD\u65B0\u767C\u9001\u9A57\u8B49\u78BC\u3002\u8ACB\u518D\u8A66\u4E00\u6B21\u3002");
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  clickAfterSuccess() {
    this.isVisableAlert = false;
    this.showSuccess = false;
    setTimeout(() => this.router.navigate(["/quizzes"]), 300);
  }
  showErrorfalse() {
    this.isVisableAlert = false;
  }
  showAlert(type, message) {
    this.alertMessage = message;
    if (type === "success") {
      this.showSuccess = true;
      this.showError = false;
    } else {
      this.showError = true;
      this.showSuccess = false;
    }
  }
  static \u0275fac = function QuizResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizResultComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(PagesService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ReferralService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizResultComponent, selectors: [["app-quiz-result"]], decls: 34, vars: 21, consts: [[1, "quiz-result", "h-space", "bg-gradient-primary-90", "mx-w-1024"], [1, "container"], [1, "result-wrapper"], [1, "text-xl", "text-center", "pb-3", "text-balance"], ["auto-animate", "", 1, "form", "w-2/4", "justify-center", "bg-base-100", "relative", 3, "ngSubmit", "formGroup"], [1, "form-wrapper"], [1, "text-xl", "text-center", "pb-3"], [1, "input", "input-bordered", "flex", "items-center", "gap-1", "relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 16", "fill", "currentColor", 1, "opacity-70"], ["d", "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"], ["type", "text", "formControlName", "name", 1, "grow", 3, "placeholder"], ["class", "text-red-400 error", 4, "ngIf"], ["d", "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"], ["d", "M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"], ["type", "text", "formControlName", "email", 1, "grow", 3, "placeholder"], [1, "input", "input-bordered", "flex", "items-center", "gap-2", "relative"], ["xmlns", "http://www.w3.org/2000/svg", "width", "32", "height", "32", "viewBox", "0 0 24 24", 1, "w-[20px]"], ["fill", "currentColor", "d", "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41c-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52c.25.13.34.43.21.67a.49.49 0 0 1-.44.28M3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7c-.23.16-.54.11-.7-.12a9.4 9.4 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01c-1.36.7-2.5 1.7-3.4 2.96c-.08.14-.23.21-.39.21m6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64c-.69-1.23-1.05-2.73-1.05-4.34c0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85c.64 1.15 1.08 1.64 1.85 2.42c.19.2.19.51 0 .71c-.11.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89c-1.49-1.01-2.38-2.65-2.38-4.39c0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56c.71.48 1.54.71 2.54.71c.24 0 .64-.03 1.04-.1c.27-.05.53.13.58.41c.05.27-.13.53-.41.58c-.57.11-1.07.12-1.21.12M14.91 22c-.04 0-.09-.01-.13-.02c-1.59-.44-2.63-1.03-3.72-2.1a7.3 7.3 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83c-2.84 0-5.44 1.58-6.61 4.03c-.39.81-.59 1.76-.59 2.8c0 .78.07 2.01.67 3.61c.1.26-.03.55-.29.64c-.26.1-.55-.04-.64-.29a11.1 11.1 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24c1.33-2.79 4.28-4.6 7.51-4.6c4.55 0 8.25 3.51 8.25 7.83c0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51c.95.94 1.86 1.46 3.27 1.85c.27.07.42.35.35.61c-.05.23-.26.38-.47.38"], ["type", "text", "formControlName", "code", 1, "grow", 3, "placeholder"], ["class", "text-success", 4, "ngIf"], [1, "link", "absolute", "bottom-[-20px]", "right-0", "opacity-65", "text-xs", "hover:opacity-100", "transition", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "rounded-none", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], ["class", "loading loading-spinner", 3, "loading-lg", 4, "ngIf"], [4, "ngIf"], ["role", "alert", "class", "fixed top-0 left-0 w-full h-screen bg-success-opicity flex items-center flex-col gap-4 justify-center transition-opacity duration-300 z-111111", 3, "opacity-0", "opacity-100", 4, "ngIf"], ["role", "alert", "class", "alert alert-error transition-opacity duration-300 flex gap-4 items-center justify-center w-fit", 3, "opacity-0", "opacity-100", 4, "ngIf"], [1, "text-red-400", "error"], [1, "text-success"], [1, "loading", "loading-spinner"], ["role", "alert", 1, "fixed", "top-0", "left-0", "w-full", "h-screen", "bg-success-opicity", "flex", "items-center", "flex-col", "gap-4", "justify-center", "transition-opacity", "duration-300", "z-111111"], [1, "text-[5vw]", "md:text-[25px]", "text-center"], [1, "flex", "p-2", "rounded-[30px]", "items-center", "justify-center", "w-[256px]", "text-[20px]", "border", "border-white", "bg-success", 3, "click"], ["role", "alert", 1, "alert", "alert-error", "transition-opacity", "duration-300", "flex", "gap-4", "items-center", "justify-center", "w-fit"], [1, "flex", "p-2", "rounded-lg", "border", "border-black", 3, "click"]], template: function QuizResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function QuizResultComponent_Template_form_ngSubmit_5_listener() {
        return !ctx.isCodeVisible ? ctx.sendForm() : ctx.submitFinalForm();
      });
      \u0275\u0275elementStart(6, "div", 5)(7, "h3", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "input", 10);
      \u0275\u0275template(13, QuizResultComponent_small_13_Template, 2, 1, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "label", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 8);
      \u0275\u0275element(16, "path", 12)(17, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(18, "input", 14);
      \u0275\u0275template(19, QuizResultComponent_small_19_Template, 2, 1, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "label", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 16);
      \u0275\u0275element(22, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(23, "input", 18);
      \u0275\u0275template(24, QuizResultComponent_small_24_Template, 2, 1, "small", 11)(25, QuizResultComponent_small_25_Template, 2, 1, "small", 19);
      \u0275\u0275elementStart(26, "span", 20);
      \u0275\u0275listener("click", function QuizResultComponent_Template_span_click_26_listener() {
        return ctx.resendCode();
      });
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "button", 21);
      \u0275\u0275template(29, QuizResultComponent_span_29_Template, 1, 2, "span", 22)(30, QuizResultComponent_span_30_Template, 2, 1, "span", 23)(31, QuizResultComponent_span_31_Template, 2, 0, "span", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(32, QuizResultComponent_div_32_Template, 5, 7, "div", 24)(33, QuizResultComponent_div_33_Template, 5, 6, "div", 25);
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_6_0;
      let tmp_9_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.text.title || "We will send the results via email.", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.myForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.text.subtitle || "Please enter your information:");
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", ctx.text.namePlaceholder || "T\xEAn");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.myForm.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.myForm.get("name")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", ctx.text.emailPlaceholder || "Email");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.myForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.myForm.get("email")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", !ctx.isCodeVisible);
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", ctx.text.codePlaceholder || "M\xE3");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.myForm.get("code")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.myForm.get("code")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successCodeText);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.text.resendLink || "Resent code\uFF1F", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("btn-disabled", ctx.isVerifying);
      \u0275\u0275property("disabled", !ctx.myForm.valid || ctx.isSubmitting || ctx.isVerifying);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isVerifying);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isVerifying);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.quiz-result[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.quiz-result[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  max-width: 400px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.quiz-result[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  padding: 40px;\n}\n.quiz-result[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -22.5px;\n}\n.quiz-result[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  boreder-radius: 0 !important;\n  height: 55px;\n  font-size: 15px;\n}\n.quiz-result[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  transform: scale(1);\n}\n.quiz-result.h-space[_ngcontent-%COMP%] {\n  padding: 70px 0;\n  margin-top: 150px;\n}\n@media (max-width: 768px) {\n  .quiz-result.h-space[_ngcontent-%COMP%] {\n    padding: 20px 0 60px;\n    margin-top: 110px;\n  }\n  .quiz-result[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    padding: 25px;\n  }\n  .quiz-result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n}\n/*# sourceMappingURL=quiz-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizResultComponent, { className: "QuizResultComponent" });
})();

// src/app/view/quiz-result/quiz-result.module.ts
var routes = [
  { path: "", component: QuizResultComponent }
];
var QuizResultModule = class _QuizResultModule {
  static \u0275fac = function QuizResultModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizResultModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _QuizResultModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ] });
};

export {
  QuizResultModule
};
//# sourceMappingURL=chunk-V2ZRMUPQ.js.map
