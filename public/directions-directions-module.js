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

module.exports = ".layer {\n  height: 100%;\n  background-color: rgba(0, 0, 20, 0.6); }\n\n.bg-image {\n  height: 100%;\n  width: 100%;\n  background: url('gopi.jpg');\n  background-repeat: no-repeat;\n  background-position: 55% 50%;\n  background-size: cover;\n  opacity: 0.9; }\n\n.header {\n  --background: #AF273F !important;\n  --color:#fff;\n  text-align: center; }\n\n.title {\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  font-family: sf; }\n\n.para1 {\n  margin: 0px !important;\n  font-size: 18px;\n  color: #fff;\n  font-family: sf; }\n\n.para2 {\n  margin: 0px !important;\n  font-size: 16px;\n  color: #fff;\n  font-family: sf;\n  opacity: 0.9; }\n\n.navigate {\n  background: blue !important;\n  font-size: 18px;\n  color: white;\n  padding: 10px;\n  margin-top: 10px;\n  font-family: sf; }\n\n.list {\n  background: transparent !important; }\n\n.icon {\n  vertical-align: text-top; }\n\n.card {\n  width: 100%;\n  margin: 3px !important;\n  border: 0.2px solid #fff !important; }\n\n.card-header {\n  border-bottom: 1px solid #737373; }\n\n@font-face {\n  font-family: sf;\n  src: url('SourceSerifPro-Regular.ttf'); }\n\n@font-face {\n  font-family: yan;\n  src: url('YanoneKaffeesatz-Regular.ttf'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0aW9ucy9HOlxcd29ya1xcbGFnbmEvc3JjXFxhcHBcXGRpcmVjdGlvbnNcXGRpcmVjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLHFDQUFxQyxFQUFBOztBQUV6QztFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQStDO0VBQy9DLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxnQ0FBYTtFQUNiLFlBQVE7RUFDUixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUNRLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVTtFQUNWLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRXBCO0VBQ0ksMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ssd0JBQXdCLEVBQUE7O0FBRTdCO0VBQ0ksV0FBVTtFQUNWLHNCQUFzQjtFQUN0QixtQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSxnQ0FBK0IsRUFBQTs7QUFHbkM7RUFDSSxlQUFlO0VBQ2Ysc0NBQXlELEVBQUE7O0FBRTNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdDQUEyRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGlyZWN0aW9ucy9kaXJlY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXllcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjAsIDAuNik7XHJcbn1cclxuLmJnLWltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2dvcGkuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTUlIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogI0FGMjczRiAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjojZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBzZjtcclxuXHJcbn1cclxuLnBhcmExe1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LWZhbWlseTogc2Y7XHJcbn1cclxuLnBhcmEye1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNmO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4ubmF2aWdhdGV7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzZjtcclxuXHJcbn1cclxuLmxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29ue1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxufVxyXG4uY2FyZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW46IDNweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwLjJweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzczNzM3MztcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2Y7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL0ZvbnRzL1NvdXJjZVNlcmlmUHJvLVJlZ3VsYXIudHRmJyk7XHJcbiAgfVxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHlhbjtcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvRm9udHMvWWFub25lS2FmZmVlc2F0ei1SZWd1bGFyLnR0ZicpO1xyXG4gIH1cclxuXHJcblxyXG4iXX0= */"

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
        var options = {
            start: this.start
        };
        this.launchNavigator.navigate(this.destination, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator: ' + error); });
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