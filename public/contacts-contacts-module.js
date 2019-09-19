(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/contacts/contacts.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]
    }
];
var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.page.html":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home/{{lang}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"contact\" | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"bg-image\">\n    <div class=\"layer\">\n  <ion-list class=\"list\">\n    <ion-item>\n        <ion-card class=\"card\">\n            <ion-card-header class=\"card-header\">\n              <ion-card-title class=\"title\">{{\"groom\" | translate}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                <p class='para2'>{{\"friends\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-9840266840\">+91-9840266840</a>(Mr A Satish) </p>\n                <p class='para2'>{{\"family\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-8870535991\">+91-8870535991</a>(Mr P R Krishnamoorthy)</p>\n            </ion-card-content>\n          </ion-card>\n    </ion-item>\n    <ion-item>\n        <ion-card class=\"card\">\n            <ion-card-header class=\"card-header\">\n              <ion-card-title class=\"title\">{{\"bride\" | translate}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p class='para2'>{{\"friends\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-8940282203\">+91-8940282203</a>(Mr S Arun) </p>\n              <p class='para2'>{{\"family\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-9944966266\">+91-9944966266</a>(Mr Shanmugam)</p>\n            </ion-card-content>\n          </ion-card>\n      </ion-item>\n  </ion-list>\n</div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/contacts/contacts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layer {\n  height: 100%;\n  background-color: rgba(0, 0, 20, 0.6); }\n\n.bg-image {\n  height: 100%;\n  width: 100%;\n  background: url('gopi.jpg');\n  background-repeat: no-repeat;\n  background-position: 55% 50%;\n  background-size: cover;\n  opacity: 0.9; }\n\n.header {\n  --background: #AF273F !important;\n  --color:#fff;\n  text-align: center; }\n\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  font-family: sf; }\n\n.para1 {\n  margin: 0px !important;\n  font-size: 18px;\n  color: #fff;\n  font-family: sf; }\n\n.para2 {\n  margin: 0px !important;\n  font-size: 16px;\n  color: #fff;\n  font-family: sf;\n  opacity: 0.9; }\n\n.navigate {\n  background: blue !important;\n  font-size: 18px;\n  color: white;\n  padding: 10px;\n  margin-top: 10px;\n  font-family: sf; }\n\n.list {\n  background: transparent !important; }\n\n.icon {\n  vertical-align: text-top; }\n\n.card {\n  width: 100%;\n  margin: 3px !important;\n  border: 0.2px solid #fff !important; }\n\n.card-header {\n  border-bottom: 1px solid #737373; }\n\n@font-face {\n  font-family: sf;\n  src: url('SourceSerifPro-Regular.ttf'); }\n\n@font-face {\n  font-family: yan;\n  src: url('YanoneKaffeesatz-Regular.ttf'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRzpcXHdvcmtcXGxhZ25hL3NyY1xcYXBwXFxjb250YWN0c1xcY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLHFDQUFxQyxFQUFBOztBQUV6QztFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQStDO0VBQy9DLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxnQ0FBYTtFQUNiLFlBQVE7RUFDUixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUNRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVTtFQUNWLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRXBCO0VBQ0ksMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ssd0JBQXdCLEVBQUE7O0FBRTdCO0VBQ0ksV0FBVTtFQUNWLHNCQUFzQjtFQUN0QixtQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSxnQ0FBK0IsRUFBQTs7QUFHbkM7RUFDSSxlQUFlO0VBQ2Ysc0NBQXlELEVBQUE7O0FBRTNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdDQUEyRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheWVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyMCwgMC42KTtcclxufVxyXG4uYmctaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ29waS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjQUYyNzNGICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHNmO1xyXG5cclxufVxyXG4ucGFyYTF7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBzZjtcclxufVxyXG4ucGFyYTJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogc2Y7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5uYXZpZ2F0ZXtcclxuICAgIGJhY2tncm91bmQ6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNmO1xyXG5cclxufVxyXG4ubGlzdHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljb257XHJcbiAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzM3MzczO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZjtcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvRm9udHMvU291cmNlU2VyaWZQcm8tUmVndWxhci50dGYnKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogeWFuO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9Gb250cy9ZYW5vbmVLYWZmZWVzYXR6LVJlZ3VsYXIudHRmJyk7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contacts/contacts.page.ts ***!
  \*******************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsPage = /** @class */ (function () {
    function ContactsPage(activatedRoute, launchNavigator) {
        this.activatedRoute = activatedRoute;
        this.launchNavigator = launchNavigator;
        this.destination = "Prem Mahal Marriage Hall,Salem Bypass Road, Karur, Tamil Nadu 639006";
    }
    ContactsPage.prototype.ngOnInit = function () {
        this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    };
    ContactsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.page.html */ "./src/app/contacts/contacts.page.html"),
            styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/contacts/contacts.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__["LaunchNavigator"]])
    ], ContactsPage);
    return ContactsPage;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module.js.map