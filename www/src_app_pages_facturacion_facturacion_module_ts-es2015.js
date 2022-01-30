(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_facturacion_facturacion_module_ts"],{

/***/ 64492:
/*!*****************************************************************!*\
  !*** ./src/app/pages/facturacion/facturacion-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacturacionPageRoutingModule": function() { return /* binding */ FacturacionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _facturacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facturacion.page */ 72087);




const routes = [
    {
        path: '',
        component: _facturacion_page__WEBPACK_IMPORTED_MODULE_0__.FacturacionPage
    }
];
let FacturacionPageRoutingModule = class FacturacionPageRoutingModule {
};
FacturacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FacturacionPageRoutingModule);



/***/ }),

/***/ 26433:
/*!*********************************************************!*\
  !*** ./src/app/pages/facturacion/facturacion.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacturacionPageModule": function() { return /* binding */ FacturacionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _facturacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facturacion-routing.module */ 64492);
/* harmony import */ var _facturacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facturacion.page */ 72087);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let FacturacionPageModule = class FacturacionPageModule {
};
FacturacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _facturacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.FacturacionPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_facturacion_page__WEBPACK_IMPORTED_MODULE_1__.FacturacionPage]
    })
], FacturacionPageModule);



/***/ }),

/***/ 72087:
/*!*******************************************************!*\
  !*** ./src/app/pages/facturacion/facturacion.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacturacionPage": function() { return /* binding */ FacturacionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_facturacion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./facturacion.page.html */ 17763);
/* harmony import */ var _facturacion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facturacion.page.scss */ 67522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let FacturacionPage = class FacturacionPage {
    constructor() {
        this.titulo = 'Facturacion';
        //
    }
    ngOnInit() {
    }
};
FacturacionPage.ctorParameters = () => [];
FacturacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-facturacion',
        template: _raw_loader_facturacion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_facturacion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FacturacionPage);



/***/ }),

/***/ 67522:
/*!*********************************************************!*\
  !*** ./src/app/pages/facturacion/facturacion.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWN0dXJhY2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 17763:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/facturacion/facturacion.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_facturacion_facturacion_module_ts-es2015.js.map