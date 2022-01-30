(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_impuestos_impuestos_module_ts"],{

/***/ 24948:
/*!*************************************************************!*\
  !*** ./src/app/pages/impuestos/impuestos-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpuestosPageRoutingModule": function() { return /* binding */ ImpuestosPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _impuestos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impuestos.page */ 19034);




const routes = [
    {
        path: '',
        component: _impuestos_page__WEBPACK_IMPORTED_MODULE_0__.ImpuestosPage
    }
];
let ImpuestosPageRoutingModule = class ImpuestosPageRoutingModule {
};
ImpuestosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImpuestosPageRoutingModule);



/***/ }),

/***/ 94758:
/*!*****************************************************!*\
  !*** ./src/app/pages/impuestos/impuestos.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpuestosPageModule": function() { return /* binding */ ImpuestosPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _impuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impuestos-routing.module */ 24948);
/* harmony import */ var _impuestos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impuestos.page */ 19034);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let ImpuestosPageModule = class ImpuestosPageModule {
};
ImpuestosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _impuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImpuestosPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_impuestos_page__WEBPACK_IMPORTED_MODULE_1__.ImpuestosPage]
    })
], ImpuestosPageModule);



/***/ }),

/***/ 19034:
/*!***************************************************!*\
  !*** ./src/app/pages/impuestos/impuestos.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpuestosPage": function() { return /* binding */ ImpuestosPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_impuestos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./impuestos.page.html */ 17549);
/* harmony import */ var _impuestos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impuestos.page.scss */ 7650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ImpuestosPage = class ImpuestosPage {
    constructor() {
        this.titulo = 'Impuestos';
    }
    ngOnInit() {
    }
};
ImpuestosPage.ctorParameters = () => [];
ImpuestosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-impuestos',
        template: _raw_loader_impuestos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_impuestos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImpuestosPage);



/***/ }),

/***/ 7650:
/*!*****************************************************!*\
  !*** ./src/app/pages/impuestos/impuestos.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXB1ZXN0b3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 17549:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/impuestos/impuestos.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_impuestos_impuestos_module_ts-es2015.js.map