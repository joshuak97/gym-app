(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_ventajas-ofertas_ventajas-ofertas_module_ts"],{

/***/ 30947:
/*!***************************************************************************!*\
  !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentajasOfertasPageRoutingModule": function() { return /* binding */ VentajasOfertasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventajas-ofertas.page */ 52402);




const routes = [
    {
        path: '',
        component: _ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_0__.VentajasOfertasPage
    }
];
let VentajasOfertasPageRoutingModule = class VentajasOfertasPageRoutingModule {
};
VentajasOfertasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VentajasOfertasPageRoutingModule);



/***/ }),

/***/ 54427:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentajasOfertasPageModule": function() { return /* binding */ VentajasOfertasPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ventajas_ofertas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventajas-ofertas-routing.module */ 30947);
/* harmony import */ var _ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventajas-ofertas.page */ 52402);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let VentajasOfertasPageModule = class VentajasOfertasPageModule {
};
VentajasOfertasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ventajas_ofertas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentajasOfertasPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_1__.VentajasOfertasPage]
    })
], VentajasOfertasPageModule);



/***/ }),

/***/ 52402:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentajasOfertasPage": function() { return /* binding */ VentajasOfertasPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ventajas_ofertas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ventajas-ofertas.page.html */ 94751);
/* harmony import */ var _ventajas_ofertas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventajas-ofertas.page.scss */ 83041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let VentajasOfertasPage = class VentajasOfertasPage {
    constructor() {
        this.titulo = 'Ventajas y Ofertas';
        //
    }
    ngOnInit() {
    }
};
VentajasOfertasPage.ctorParameters = () => [];
VentajasOfertasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ventajas-ofertas',
        template: _raw_loader_ventajas_ofertas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ventajas_ofertas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VentajasOfertasPage);



/***/ }),

/***/ 83041:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YWphcy1vZmVydGFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 94751:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ventajas-ofertas/ventajas-ofertas.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ventajas-ofertas_ventajas-ofertas_module_ts-es2015.js.map