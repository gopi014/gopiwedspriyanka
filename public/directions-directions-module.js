(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directions-directions-module"],{

/***/ "./src/app/directions/directions.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directions/directions.module.ts ***!
  \*************************************************/
/*! exports provided: DirectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsPageModule", function() { return DirectionsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _directions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directions.page */ "./src/app/directions/directions.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _directions_page__WEBPACK_IMPORTED_MODULE_6__["DirectionsPage"]
    }
];
var DirectionsPageModule = /** @class */ (function () {
    function DirectionsPageModule() {
    }
    DirectionsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_directions_page__WEBPACK_IMPORTED_MODULE_6__["DirectionsPage"]]
        })
    ], DirectionsPageModule);
    return DirectionsPageModule;
}());



/***/ }),

/***/ "./src/app/directions/directions.page.html":
/*!*************************************************!*\
  !*** ./src/app/directions/directions.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home/{{lang}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{\"direction\" | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div class=\"bg-image\">\r\n    <div class=\"layer\">\r\n  <ion-list class=\"list\">\r\n    <ion-item>\r\n        <ion-card class=\"card\">\r\n            <ion-card-header class=\"card-header\">\r\n              <ion-card-title class=\"title\">{{\"marriagehall\" | translate}}</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n                <p class='para1'>{{\"address1\" | translate }}</p>\r\n                <p class='para2'>{{\"address2\" | translate }}</p>\r\n                <p class='para2'>{{\"address3\" | translate }}</p>\r\n                <p class='para2'>{{\"address4\" | translate }}</p>\r\n                <button ion-button (click)=\"navigate()\" class=\"navigate\">{{\"navigate\" | translate}}\r\n                    <ion-icon name=\"arrow-forward\" class=\"icon\"></ion-icon>\r\n                </button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-card class=\"card\">\r\n            <ion-card-header class=\"card-header\">\r\n              <ion-card-title class=\"title\">{{\"stay\" | translate}}</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n                <p class='para1'>{{\"address1\" | translate }}</p>\r\n                <p class='para2'>{{\"address2\" | translate }}</p>\r\n                <p class='para2'>{{\"address3\" | translate }}</p>\r\n                <p class='para2'>{{\"address4\" | translate }}</p>\r\n                <button ion-button (click)=\"navigatetohotel()\" class=\"navigate\">{{\"navigate\" | translate}}\r\n                    <ion-icon name=\"arrow-forward\" class=\"icon\"></ion-icon>\r\n                </button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n      </ion-item>\r\n  </ion-list>\r\n</div>\r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/directions/directions.page.scss":
/*!*************************************************!*\
  !*** ./src/app/directions/directions.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layer {\n  height: 100%;\n  background-color: rgba(0, 0, 20, 0.6); }\n\n.bg-image {\n  height: 100%;\n  width: 100%;\n  background: url('gopi.jpg');\n  background-repeat: no-repeat;\n  background-position: 55% 50%;\n  background-size: cover;\n  opacity: 0.9; }\n\n.header {\n  --background: #AF273F !important;\n  --color:#fff;\n  text-align: center; }\n\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  font-family: sf; }\n\n.para1 {\n  margin: 0px !important;\n  font-size: 18px;\n  color: #fff;\n  font-family: sf; }\n\n.para2 {\n  margin: 0px !important;\n  font-size: 16px;\n  color: #fff;\n  font-family: sf;\n  opacity: 0.9; }\n\n.navigate {\n  background: blue !important;\n  font-size: 18px;\n  color: white;\n  padding: 10px;\n  margin-top: 10px;\n  font-family: sf; }\n\n.list {\n  background: transparent !important; }\n\n.icon {\n  vertical-align: text-top; }\n\n.card {\n  width: 100%;\n  margin: 3px !important;\n  border: 0.2px solid #fff !important; }\n\n.card-header {\n  border-bottom: 1px solid #737373; }\n\n@font-face {\n  font-family: sf;\n  src: url('SourceSerifPro-Regular.ttf'); }\n\n@font-face {\n  font-family: yan;\n  src: url('YanoneKaffeesatz-Regular.ttf'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0aW9ucy9DOlxcVXNlcnNcXEkwMDAwOTM0XFxEb2N1bWVudHNcXHBlcnNvbmFsXFxsYWduYS9zcmNcXGFwcFxcZGlyZWN0aW9uc1xcZGlyZWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1oscUNBQXFDLEVBQUE7O0FBRXpDO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGdDQUFhO0VBQ2IsWUFBUTtFQUNSLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVTtFQUNWLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVU7RUFDVixlQUFlLEVBQUE7O0FBRW5CO0VBQ1Esc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFcEI7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSyx3QkFBd0IsRUFBQTs7QUFFN0I7RUFDSSxXQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG1DQUFtQyxFQUFBOztBQUV2QztFQUNJLGdDQUErQixFQUFBOztBQUduQztFQUNJLGVBQWU7RUFDZixzQ0FBeUQsRUFBQTs7QUFFM0Q7RUFDRSxnQkFBZ0I7RUFDaEIsd0NBQTJELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaXJlY3Rpb25zL2RpcmVjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheWVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyMCwgMC42KTtcclxufVxyXG4uYmctaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ29waS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjQUYyNzNGICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHNmO1xyXG5cclxufVxyXG4ucGFyYTF7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBzZjtcclxufVxyXG4ucGFyYTJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogc2Y7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG59XHJcbi5uYXZpZ2F0ZXtcclxuICAgIGJhY2tncm91bmQ6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNmO1xyXG5cclxufVxyXG4ubGlzdHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljb257XHJcbiAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbjogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAuMnB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNzM3MzczO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZjtcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvRm9udHMvU291cmNlU2VyaWZQcm8tUmVndWxhci50dGYnKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogeWFuO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9Gb250cy9ZYW5vbmVLYWZmZWVzYXR6LVJlZ3VsYXIudHRmJyk7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/directions/directions.page.ts":
/*!***********************************************!*\
  !*** ./src/app/directions/directions.page.ts ***!
  \***********************************************/
/*! exports provided: DirectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsPage", function() { return DirectionsPage; });
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



var DirectionsPage = /** @class */ (function () {
    function DirectionsPage(activatedRoute, launchNavigator) {
        this.activatedRoute = activatedRoute;
        this.launchNavigator = launchNavigator;
        this.destination = "Prem Mahal Marriage Hall,Salem Bypass Road, Karur, Tamil Nadu 639006";
    }
    DirectionsPage.prototype.ngOnInit = function () {
        this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
        console.log(this.lang);
    };
    DirectionsPage.prototype.navigate = function () {
        if /* if we're on iOS, open in Apple Maps */ ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");
        else /* else use Google */
            window.open("https://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");
    };
    DirectionsPage.prototype.navigatetohotel = function () {
        if /* if we're on iOS, open in Apple Maps */ ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");
        else /* else use Google */
            window.open("https://maps.google.com/maps?daddr=Prem+Mahal+Marriage+Hall,+No+18+New+Byepass+Road,+Road,+Salem+Bypass+Road,+Vaiyapuri+Nagar,+Green+Lands,+Karur,+Tamil+Nadu+639006,+India");
    };
    DirectionsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directions',
            template: __webpack_require__(/*! ./directions.page.html */ "./src/app/directions/directions.page.html"),
            styles: [__webpack_require__(/*! ./directions.page.scss */ "./src/app/directions/directions.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__["LaunchNavigator"]])
    ], DirectionsPage);
    return DirectionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=directions-directions-module.js.map