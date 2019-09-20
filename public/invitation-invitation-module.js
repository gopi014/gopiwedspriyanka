(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invitation-invitation-module"],{

/***/ "./src/app/invitation/invitation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/invitation/invitation.module.ts ***!
  \*************************************************/
/*! exports provided: InvitationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationPageModule", function() { return InvitationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _invitation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invitation.page */ "./src/app/invitation/invitation.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _invitation_page__WEBPACK_IMPORTED_MODULE_6__["InvitationPage"]
    }
];
var InvitationPageModule = /** @class */ (function () {
    function InvitationPageModule() {
    }
    InvitationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_invitation_page__WEBPACK_IMPORTED_MODULE_6__["InvitationPage"]]
        })
    ], InvitationPageModule);
    return InvitationPageModule;
}());



/***/ }),

/***/ "./src/app/invitation/invitation.page.html":
/*!*************************************************!*\
  !*** ./src/app/invitation/invitation.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"header\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/home/{{lang}}\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>{{\"invitation\" | translate }}</ion-title>\r\n    </ion-toolbar>\r\n   </ion-header>\r\n\r\n<ion-content padding>\r\n  <div *ngIf=\"lang=='en'\">\r\n      <ion-img src=\"assets/images/gopi_2.JPG\" ></ion-img>\r\n  </div>\r\n   <div  *ngIf=\"lang=='ta'\">\r\n      <ion-img src=\"assets/images/gopi.jpg\" ></ion-img>\r\n   </div>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/invitation/invitation.page.scss":
/*!*************************************************!*\
  !*** ./src/app/invitation/invitation.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  --background: #AF273F !important;\n  --color:#fff;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRhdGlvbi9DOlxcVXNlcnNcXEkwMDAwOTM0XFxEb2N1bWVudHNcXHBlcnNvbmFsXFxsYWduYS9zcmNcXGFwcFxcaW52aXRhdGlvblxcaW52aXRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBYTtFQUNiLFlBQVE7RUFDUixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludml0YXRpb24vaW52aXRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjQUYyNzNGICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/invitation/invitation.page.ts":
/*!***********************************************!*\
  !*** ./src/app/invitation/invitation.page.ts ***!
  \***********************************************/
/*! exports provided: InvitationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationPage", function() { return InvitationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvitationPage = /** @class */ (function () {
    function InvitationPage(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.test = true;
    }
    InvitationPage.prototype.ngOnInit = function () {
        this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
        console.log(this.lang);
    };
    InvitationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invitation',
            template: __webpack_require__(/*! ./invitation.page.html */ "./src/app/invitation/invitation.page.html"),
            styles: [__webpack_require__(/*! ./invitation.page.scss */ "./src/app/invitation/invitation.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], InvitationPage);
    return InvitationPage;
}());



/***/ })

}]);
//# sourceMappingURL=invitation-invitation-module.js.map