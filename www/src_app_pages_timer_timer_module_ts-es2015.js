(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_timer_timer_module_ts"],{

/***/ 17070:
/*!*****************************************************!*\
  !*** ./src/app/pages/timer/timer-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageRoutingModule": function() { return /* binding */ TimerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.page */ 53449);




const routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_0__.TimerPage
    }
];
let TimerPageRoutingModule = class TimerPageRoutingModule {
};
TimerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimerPageRoutingModule);



/***/ }),

/***/ 93242:
/*!*********************************************!*\
  !*** ./src/app/pages/timer/timer.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageModule": function() { return /* binding */ TimerPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-routing.module */ 17070);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page */ 53449);







let TimerPageModule = class TimerPageModule {
};
TimerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimerPageRoutingModule
        ],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_1__.TimerPage]
    })
], TimerPageModule);



/***/ }),

/***/ 53449:
/*!*******************************************!*\
  !*** ./src/app/pages/timer/timer.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPage": function() { return /* binding */ TimerPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./timer.page.html */ 68481);
/* harmony import */ var _timer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page.scss */ 51132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TimerPage = class TimerPage {
    constructor() { }
    ngOnInit() {
    }
};
TimerPage.ctorParameters = () => [];
TimerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timer',
        template: _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_timer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TimerPage);



/***/ }),

/***/ 51132:
/*!*********************************************!*\
  !*** ./src/app/pages/timer/timer.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 68481:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timer/timer.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>timer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_timer_timer_module_ts-es2015.js.map