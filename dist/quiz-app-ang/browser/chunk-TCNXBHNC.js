import {
  HttpClient,
  environment,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AB3KI4M6.js";

// src/app/core/services/quiz.service.ts
var QuizService = class _QuizService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getQuizzes() {
    return this.http.get(`${this.apiUrl}/quizzes`).pipe(map((response) => response.data));
  }
  getQuizById(id) {
    return this.http.get(`${this.apiUrl}/quizzes/${id}`).pipe(map((response) => response.data));
  }
  addQuiz(quiz) {
    return this.http.post(`${this.apiUrl}/quizzes`, quiz).pipe(map((response) => response.data));
  }
  static \u0275fac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
};

export {
  QuizService
};
//# sourceMappingURL=chunk-TCNXBHNC.js.map
