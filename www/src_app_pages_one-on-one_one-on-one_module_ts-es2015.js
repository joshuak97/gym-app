(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_one-on-one_one-on-one_module_ts"],{

/***/ 40595:
/*!***************************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneOnOnePageRoutingModule": function() { return /* binding */ OneOnOnePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _one_on_one_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-on-one.page */ 97721);




const routes = [
    {
        path: '',
        component: _one_on_one_page__WEBPACK_IMPORTED_MODULE_0__.OneOnOnePage
    }
];
let OneOnOnePageRoutingModule = class OneOnOnePageRoutingModule {
};
OneOnOnePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OneOnOnePageRoutingModule);



/***/ }),

/***/ 87234:
/*!*******************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneOnOnePageModule": function() { return /* binding */ OneOnOnePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _one_on_one_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-on-one-routing.module */ 40595);
/* harmony import */ var _one_on_one_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-on-one.page */ 97721);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let OneOnOnePageModule = class OneOnOnePageModule {
};
OneOnOnePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _one_on_one_routing_module__WEBPACK_IMPORTED_MODULE_0__.OneOnOnePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_one_on_one_page__WEBPACK_IMPORTED_MODULE_1__.OneOnOnePage]
    })
], OneOnOnePageModule);



/***/ }),

/***/ 97721:
/*!*****************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneOnOnePage": function() { return /* binding */ OneOnOnePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_one_on_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./one-on-one.page.html */ 18577);
/* harmony import */ var _one_on_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-on-one.page.scss */ 52831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let OneOnOnePage = class OneOnOnePage {
    constructor() {
        this.titulo = 'One-On-One';
        //
    }
    ngOnInit() {
    }
};
OneOnOnePage.ctorParameters = () => [];
OneOnOnePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-one-on-one',
        template: _raw_loader_one_on_one_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_one_on_one_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OneOnOnePage);



/***/ }),

/***/ 52831:
/*!*******************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmUtb24tb25lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 18577:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/one-on-one/one-on-one.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_one-on-one_one-on-one_module_ts-es2015.js.map