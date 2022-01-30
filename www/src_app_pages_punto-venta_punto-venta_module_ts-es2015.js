(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_punto-venta_punto-venta_module_ts"],{

/***/ 69388:
/*!*****************************************************************!*\
  !*** ./src/app/pages/punto-venta/punto-venta-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PuntoVentaPageRoutingModule": function() { return /* binding */ PuntoVentaPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _punto_venta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./punto-venta.page */ 26755);




const routes = [
    {
        path: '',
        component: _punto_venta_page__WEBPACK_IMPORTED_MODULE_0__.PuntoVentaPage
    }
];
let PuntoVentaPageRoutingModule = class PuntoVentaPageRoutingModule {
};
PuntoVentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PuntoVentaPageRoutingModule);



/***/ }),

/***/ 39721:
/*!*********************************************************!*\
  !*** ./src/app/pages/punto-venta/punto-venta.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PuntoVentaPageModule": function() { return /* binding */ PuntoVentaPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _punto_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./punto-venta-routing.module */ 69388);
/* harmony import */ var _punto_venta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./punto-venta.page */ 26755);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let PuntoVentaPageModule = class PuntoVentaPageModule {
};
PuntoVentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _punto_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__.PuntoVentaPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_punto_venta_page__WEBPACK_IMPORTED_MODULE_1__.PuntoVentaPage]
    })
], PuntoVentaPageModule);



/***/ }),

/***/ 26755:
/*!*******************************************************!*\
  !*** ./src/app/pages/punto-venta/punto-venta.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PuntoVentaPage": function() { return /* binding */ PuntoVentaPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_punto_venta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./punto-venta.page.html */ 30375);
/* harmony import */ var _punto_venta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./punto-venta.page.scss */ 97671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PuntoVentaPage = class PuntoVentaPage {
    constructor() {
        this.titulo = 'Punto de Venta';
        //
    }
    ngOnInit() {
    }
};
PuntoVentaPage.ctorParameters = () => [];
PuntoVentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-punto-venta',
        template: _raw_loader_punto_venta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_punto_venta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PuntoVentaPage);



/***/ }),

/***/ 97671:
/*!*********************************************************!*\
  !*** ./src/app/pages/punto-venta/punto-venta.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdW50by12ZW50YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 30375:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/punto-venta/punto-venta.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_punto-venta_punto-venta_module_ts-es2015.js.map