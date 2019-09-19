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

module.exports = "<ion-header>\n    <ion-toolbar class=\"header\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/home/{{lang}}\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{\"invitation\" | translate }}</ion-title>\n    </ion-toolbar>\n   </ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"lang=='en'\">\n      <ion-img src=\"assets/images/gopi_2.JPG\" ></ion-img>\n  </div>\n   <div  *ngIf=\"lang=='ta'\">\n      <ion-img src=\"assets/images/gopi.jpg\" ></ion-img>\n   </div>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/invitation/invitation.page.scss":
/*!*************************************************!*\
  !*** ./src/app/invitation/invitation.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  --background: #AF273F !important;\n  --color:#fff;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52aXRhdGlvbi9HOlxcd29ya1xcbGFnbmEvc3JjXFxhcHBcXGludml0YXRpb25cXGludml0YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWE7RUFDYixZQUFRO0VBQ1Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGF0aW9uL2ludml0YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogI0FGMjczRiAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjojZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

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