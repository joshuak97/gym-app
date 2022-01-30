(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_calendario_calendario_module_ts"],{

/***/ 83874:
/*!***************************************************************!*\
  !*** ./src/app/pages/calendario/calendario-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarioPageRoutingModule": function() { return /* binding */ CalendarioPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendario.page */ 75721);




const routes = [
    {
        path: '',
        component: _calendario_page__WEBPACK_IMPORTED_MODULE_0__.CalendarioPage
    }
];
let CalendarioPageRoutingModule = class CalendarioPageRoutingModule {
};
CalendarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalendarioPageRoutingModule);



/***/ }),

/***/ 37711:
/*!*******************************************************!*\
  !*** ./src/app/pages/calendario/calendario.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarioPageModule": function() { return /* binding */ CalendarioPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _calendario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendario-routing.module */ 83874);
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendario.page */ 75721);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let CalendarioPageModule = class CalendarioPageModule {
};
CalendarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _calendario_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarioPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_1__.CalendarioPage]
    })
], CalendarioPageModule);



/***/ }),

/***/ 75721:
/*!*****************************************************!*\
  !*** ./src/app/pages/calendario/calendario.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarioPage": function() { return /* binding */ CalendarioPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_calendario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calendario.page.html */ 72590);
/* harmony import */ var _calendario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendario.page.scss */ 52966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CalendarioPage = class CalendarioPage {
    constructor() {
        this.titulo = 'Calendario';
        //
    }
    ngOnInit() {
    }
};
CalendarioPage.ctorParameters = () => [];
CalendarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calendario',
        template: _raw_loader_calendario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calendario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalendarioPage);



/***/ }),

/***/ 52966:
/*!*******************************************************!*\
  !*** ./src/app/pages/calendario/calendario.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhcmlvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 72590:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendario/calendario.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calendario_calendario_module_ts-es2015.js.map