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

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home/{{lang}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"contact\" | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div class=\"bg-image\">\r\n    <div class=\"layer\">\r\n  <ion-list class=\"list\">\r\n    <ion-item>\r\n        <ion-card class=\"card\">\r\n            <ion-card-header class=\"card-header\">\r\n              <ion-card-title class=\"title\">{{\"groom\" | translate}}</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n                <p class='para2'>{{\"friends\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-9840266840\">+91-9840266840</a>(Mr A Satish) </p>\r\n                <p class='para2'>{{\"family\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-8870535991\">+91-8870535991</a>(Mr P R Krishnamoorthy)</p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-card class=\"card\">\r\n            <ion-card-header class=\"card-header\">\r\n              <ion-card-title class=\"title\">{{\"bride\" | translate}}</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <p class='para2'>{{\"friends\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-8940282203\">+91-8940282203</a>(Mr S Arun) </p>\r\n              <p class='para2'>{{\"family\" | translate }}&nbsp;:&nbsp;<a href=\"tel:+91-9944966266\">+91-9944966266</a>(Mr Shanmugam)</p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n      </ion-item>\r\n  </ion-list>\r\n</div>\r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/contacts/contacts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layer {\n  height: 100%;\n  background-color: rgba(0, 0, 20, 0.6); }\n\n.bg-image {\n  height: 100%;\n  width: 100%;\n  background: url('gopi.jpg');\n  background-repeat: no-repeat;\n  background-position: 55% 50%;\n  background-size: cover;\n  opacity: 0.9; }\n\n.header {\n  --background: #AF273F !important;\n  --color:#fff;\n  text-align: center; }\n\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  font-family: sf; }\n\n.para1 {\n  margin: 0px !important;\n  font-size: 18px;\n  color: #fff;\n  font-family: sf; }\n\n.para2 {\n  margin: 0px !important;\n  font-size: 16px;\n  color: #fff;\n  font-family: sf;\n  opacity: 0.9; }\n\n.navigate {\n  background: blue !important;\n  font-size: 18px;\n  color: white;\n  padding: 10px;\n  margin-top: 10px;\n  font-family: sf; }\n\n.list {\n  background: transparent !important; }\n\n.icon {\n  vertical-align: text-top; }\n\n.card {\n  width: 100%;\n  margin: 3px !important;\n  border: 0.2px solid #fff !important; }\n\n.card-header {\n  border-bottom: 1px solid #737373; }\n\n@font-face {\n  font-family: sf;\n  src: url('SourceSerifPro-Regular.ttf'); }\n\n@font-face {\n  font-family: yan;\n  src: url('YanoneKaffeesatz-Regular.ttf'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvQzpcXFVzZXJzXFxJMDAwMDkzNFxcRG9jdW1lbnRzXFxwZXJzb25hbFxcbGFnbmEvc3JjXFxhcHBcXGNvbnRhY3RzXFxjb250YWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1oscUNBQXFDLEVBQUE7O0FBRXpDO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGdDQUFhO0VBQ2IsWUFBUTtFQUNSLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVTtFQUNWLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVU7RUFDVixlQUFlLEVBQUE7O0FBRW5CO0VBQ1Esc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFcEI7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSyx3QkFBd0IsRUFBQTs7QUFFN0I7RUFDSSxXQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG1DQUFtQyxFQUFBOztBQUV2QztFQUNJLGdDQUErQixFQUFBOztBQUduQztFQUNJLGVBQWU7RUFDZixzQ0FBeUQsRUFBQTs7QUFFM0Q7RUFDRSxnQkFBZ0I7RUFDaEIsd0NBQTJELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5ZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDIwLCAwLjYpO1xyXG59XHJcbi5iZy1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9nb3BpLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDU1JSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNBRjI3M0YgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6I2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LWZhbWlseTogc2Y7XHJcblxyXG59XHJcbi5wYXJhMXtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHNmO1xyXG59XHJcbi5wYXJhMntcclxuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuLm5hdmlnYXRle1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Y7XHJcblxyXG59XHJcbi5saXN0e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uaWNvbntcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOiAzcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMC4ycHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM3MzczNzM7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9Gb250cy9Tb3VyY2VTZXJpZlByby1SZWd1bGFyLnR0ZicpO1xyXG4gIH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB5YW47XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL0ZvbnRzL1lhbm9uZUthZmZlZXNhdHotUmVndWxhci50dGYnKTtcclxuICB9XHJcblxyXG5cclxuIl19 */"

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