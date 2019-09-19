(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Ionic Blank\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"bg-image\">\r\n    <div class=\"layer\">\r\n      <div>\r\n          <ion-row justify-content-end style=\"padding-top: 10px;\">\r\n              <ion-radio-group [(value)]=\"lang\" (ionChange)=\"langChange()\">\r\n                <ion-col >\r\n                  <ion-label class=\"label-text\">English</ion-label>\r\n                  <ion-radio value=\"en\" class=\"radio-hidden\"></ion-radio>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label  class=\"label-text\">தமிழ்</ion-label>\r\n                  <ion-radio value=\"ta\" class=\"radio-hidden\" ></ion-radio>\r\n                </ion-col>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n      </div>\r\n      <div class='layer1'>\r\n          <img class='imageOne' src=\"assets/icon/Wedding-Ring-128.png\" />\r\n      </div>\r\n      <p class='para1'>{{\"welcome_name\" | translate }}</p>\r\n      <p class='para2'>{{\"welcome_event\" | translate }}</p>\r\n      <p class='para3'[innerHtml]=\"'welcome_date' | translate\"></p>\r\n      <div class='layer2'>\r\n        <img class='imageTwo' src=\"assets/icon/Group 1.png\" />\r\n      </div>\r\n      <button ion-button full class=\"buttonOne\" (click)=\"createEvent()\">{{\"rsvp\" | translate }}</button>\r\n      <button ion-button full class=\"buttonTwo\" expand=\"block\" [routerLink]=\"['/invitation',lang]\" routerDirection=\"forward\">{{\"invitation\" | translate }}</button>\r\n      <button ion-button full class=\"buttonThree\" [routerLink]=\"['/contacts',lang]\" routerDirection=\"forward\">{{\"contact\" | translate }}</button>\r\n      <button ion-button full class=\"buttonFour\" [routerLink]=\"['/directions',lang]\" routerDirection=\"forward\">{{\"direction\" | translate }}</button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <h2>{{\"home\" | translate }}</h2>\r\n  <p>\r\n   {{ \"about\" | translate }}\r\n  </p>\r\n  <p>\r\n   {{\"welcome\" | translate }}\r\n  </p>\r\n        <button ion-button color=\"secondary\" (click)=\"langChange()\">Secondary</button> -->\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-image {\n  height: 100%;\n  width: 100%;\n  background: url('gopi.jpg');\n  background-repeat: no-repeat;\n  background-position: 55% 50%;\n  background-size: cover;\n  opacity: 0.9; }\n\n.buttonOne {\n  width: 100%;\n  height: 6%;\n  position: absolute;\n  bottom: 18%;\n  background-color: #CD3E5C;\n  color: #fff;\n  font-family: myFirstFont;\n  font-size: 16px; }\n\n.buttonTwo {\n  width: 100%;\n  height: 6%;\n  position: absolute;\n  bottom: 12%;\n  background-color: #C93653;\n  color: #fff;\n  font-family: myFirstFont;\n  font-size: 16px; }\n\n.buttonThree {\n  width: 100%;\n  height: 6%;\n  position: absolute;\n  bottom: 6%;\n  background-color: #C1304D;\n  color: #fff;\n  font-family: myFirstFont;\n  font-size: 16px; }\n\n.buttonFour {\n  width: 100%;\n  height: 6%;\n  position: absolute;\n  bottom: 0;\n  background-color: #AF273F;\n  color: #fff;\n  font-family: myFirstFont;\n  font-size: 16px; }\n\n.layer {\n  height: 100%;\n  background-color: rgba(205, 62, 92, 0.3); }\n\n.layer .layer1 {\n    display: flex; }\n\n.layer .layer2 {\n    position: absolute;\n    text-align: center;\n    bottom: 26%;\n    width: 100%; }\n\n.para1 {\n  color: #fff;\n  text-align: center;\n  margin: 0;\n  font-size: 28px;\n  font-family: mySecondFont; }\n\n.para2 {\n  color: #fff;\n  text-align: center;\n  margin: 5px;\n  font-family: myThirdFont;\n  font-size: 18px; }\n\n.para3 {\n  color: #fff;\n  text-align: center;\n  font-family: myThirdFont;\n  margin: 13px;\n  font-size: 22px; }\n\n.imageTwo {\n  height: 41px;\n  margin: auto;\n  left: 50%; }\n\n.imageOne {\n  height: 92px;\n  margin: auto; }\n\n.label-text {\n  color: #fff; }\n\n.radio-hidden {\n  --color-checked:#AF273F; }\n\n@font-face {\n  font-family: myFirstFont;\n  src: url('BubblegumSans-Regular.ttf'); }\n\n@font-face {\n  font-family: mySecondFont;\n  src: url('Pacifico-Regular.ttf'); }\n\n@font-face {\n  font-family: myThirdFont;\n  src: url('JosefinSans-Regular.ttf'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9HOlxcd29ya1xcbGFnbmEvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBRVEsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVTtFQUNWLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFdBQVU7RUFDVix3QkFBd0I7RUFDeEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsV0FBVTtFQUNWLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWTtFQUNaLHdDQUF1QyxFQUFBOztBQUYzQztJQUlRLGFBQWEsRUFBQTs7QUFKckI7SUFPUSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFVLEVBQUE7O0FBTWxCO0VBQ0ksV0FBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLFdBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBWTtFQUNaLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFXO0VBQUUsWUFBYTtFQUFDLFNBQy9CLEVBQUE7O0FBQ0E7RUFDSSxZQUFXO0VBQUUsWUFDakIsRUFBQTs7QUFDQTtFQUNJLFdBQVksRUFBQTs7QUFFaEI7RUFDSSx1QkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSx3QkFBd0I7RUFDeEIscUNBQXdELEVBQUE7O0FBRTFEO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFtRCxFQUFBOztBQUVyRDtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYmFja2dyb3VuZEltYWdle1xyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2dvcGkuSlBHJyk7XHJcbi8vIH1cclxuLy8gaW1ne1xyXG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuLy8gfVxyXG4uYmctaW1hZ2Uge1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2dvcGkuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG4uYnV0dG9uT25le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxOCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0QzRTVDO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBteUZpcnN0Rm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uYnV0dG9uVHdve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzkzNjUzO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBteUZpcnN0Rm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uYnV0dG9uVGhyZWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNiU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDYlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MxMzA0RDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LWZhbWlseTogbXlGaXJzdEZvbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmJ1dHRvbkZvdXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNiU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUYyNzNGO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBteUZpcnN0Rm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubGF5ZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNSwgNjIsIDkyLDAuMyk7XHJcbiAgICAubGF5ZXIxe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAubGF5ZXIye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduIDpjZW50ZXI7XHJcbiAgICAgICAgYm90dG9tOiAyNiU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxufVxyXG4vLyAubGF5ZXIze1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDUsIDYyLCA5MiwwLjUpO1xyXG4vLyB9XHJcbi5wYXJhMXtcclxuICAgIGNvbG9yIDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBteVNlY29uZEZvbnQ7XHJcbn1cclxuLnBhcmEye1xyXG4gICAgY29sb3IgOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogbXlUaGlyZEZvbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wYXJhM3tcclxuICAgIGNvbG9yIDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBteVRoaXJkRm9udDtcclxuICAgIG1hcmdpbjogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uaW1hZ2VUd297XHJcbiAgICBoZWlnaHQ6NDFweDsgbWFyZ2luIDogYXV0bztsZWZ0OjUwJVxyXG59XHJcbi5pbWFnZU9uZXtcclxuICAgIGhlaWdodDo5MnB4OyBtYXJnaW4gOiBhdXRvXHJcbn1cclxuLmxhYmVsLXRleHR7XHJcbiAgICBjb2xvciA6ICNmZmY7XHJcbn1cclxuLnJhZGlvLWhpZGRlbntcclxuICAgIC0tY29sb3ItY2hlY2tlZDojQUYyNzNGO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Rmlyc3RGb250O1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9Gb250cy9CdWJibGVndW1TYW5zLVJlZ3VsYXIudHRmJyk7XHJcbiAgfVxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG15U2Vjb25kRm9udDtcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvRm9udHMvUGFjaWZpY28tUmVndWxhci50dGYnKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbXlUaGlyZEZvbnQ7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL0ZvbnRzL0pvc2VmaW5TYW5zLVJlZ3VsYXIudHRmJyk7XHJcbiAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(events, calendar, toast, activatedRoute) {
        this.events = events;
        this.calendar = calendar;
        this.toast = toast;
        this.activatedRoute = activatedRoute;
    }
    HomePage.prototype.ngOnInit = function () {
        this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
        console.log(this.lang);
    };
    HomePage.prototype.langChange = function () {
        if (this.lang === 'en') {
            this.lang = 'ta';
        }
        else {
            this.lang = 'en';
        }
        this.events.publish('lang:change', this.lang);
    };
    HomePage.prototype.createEvent = function () {
        var _this = this;
        this.startDate = new Date(2019, 10, 28, 18, 30, 0, 0);
        this.endDate = new Date(2019, 10, 28, 22, 30, 0, 0);
        var calOptions = this.calendar.getCalendarOptions();
        calOptions.firstReminderMinutes = 2880;
        calOptions.secondReminderMinutes = 600;
        this.calendar.findEvent('Gopi weds priyanka', 'Karur ', 'wedding Reception', this.startDate, this.endDate)
            .then(function (msg) {
            if (msg.length === 0) {
                _this.calendar.createEventWithOptions('Gopi weds priyanka', 'Karur ', 'wedding Reception', _this.startDate, _this.endDate, calOptions)
                    .then(function (success) {
                    _this.toast.show('Calendar Event added successfully!', '10000', 'bottom').subscribe(function (toast) {
                        console.log(toast);
                    });
                }, function (err) {
                    _this.toast.show(err, '10000', 'bottom').subscribe(function (toast) {
                        console.log(toast);
                    });
                });
            }
            else {
                _this.toast.show('Calendar Event already exist!', '10000', 'bottom').subscribe(function (toast) {
                    console.log(toast);
                });
            }
        }, function (err) {
            _this.toast.show(err, '10000', 'bottom').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__["Calendar"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map