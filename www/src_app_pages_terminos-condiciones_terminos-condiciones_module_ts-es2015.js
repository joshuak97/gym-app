(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_terminos-condiciones_terminos-condiciones_module_ts"],{

/***/ 84886:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/terminos-condiciones/terminos-condiciones-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminosCondicionesPageRoutingModule": function() { return /* binding */ TerminosCondicionesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminos-condiciones.page */ 21809);




const routes = [
    {
        path: '',
        component: _terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_0__.TerminosCondicionesPage
    }
];
let TerminosCondicionesPageRoutingModule = class TerminosCondicionesPageRoutingModule {
};
TerminosCondicionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TerminosCondicionesPageRoutingModule);



/***/ }),

/***/ 46267:
/*!***************************************************************************!*\
  !*** ./src/app/pages/terminos-condiciones/terminos-condiciones.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminosCondicionesPageModule": function() { return /* binding */ TerminosCondicionesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _terminos_condiciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminos-condiciones-routing.module */ 84886);
/* harmony import */ var _terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminos-condiciones.page */ 21809);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let TerminosCondicionesPageModule = class TerminosCondicionesPageModule {
};
TerminosCondicionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _terminos_condiciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.TerminosCondicionesPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_terminos_condiciones_page__WEBPACK_IMPORTED_MODULE_1__.TerminosCondicionesPage]
    })
], TerminosCondicionesPageModule);



/***/ }),

/***/ 21809:
/*!*************************************************************************!*\
  !*** ./src/app/pages/terminos-condiciones/terminos-condiciones.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminosCondicionesPage": function() { return /* binding */ TerminosCondicionesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_terminos_condiciones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terminos-condiciones.page.html */ 26009);
/* harmony import */ var _terminos_condiciones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminos-condiciones.page.scss */ 35294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TerminosCondicionesPage = class TerminosCondicionesPage {
    constructor() {
        this.titulo = 'Terminos y Condiciones';
    }
    ngOnInit() {
    }
};
TerminosCondicionesPage.ctorParameters = () => [];
TerminosCondicionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terminos-condiciones',
        template: _raw_loader_terminos_condiciones_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terminos_condiciones_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TerminosCondicionesPage);



/***/ }),

/***/ 35294:
/*!***************************************************************************!*\
  !*** ./src/app/pages/terminos-condiciones/terminos-condiciones.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtaW5vcy1jb25kaWNpb25lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 26009:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terminos-condiciones/terminos-condiciones.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_terminos-condiciones_terminos-condiciones_module_ts-es2015.js.map