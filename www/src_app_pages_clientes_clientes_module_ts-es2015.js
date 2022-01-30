(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_clientes_clientes_module_ts"],{

/***/ 74533:
/*!***********************************************************!*\
  !*** ./src/app/pages/clientes/clientes-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageRoutingModule": function() { return /* binding */ ClientesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes.page */ 32230);




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_0__.ClientesPage
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ 28953:
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageModule": function() { return /* binding */ ClientesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes-routing.module */ 74533);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page */ 32230);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_1__.ClientesPage]
    })
], ClientesPageModule);



/***/ }),

/***/ 32230:
/*!*************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPage": function() { return /* binding */ ClientesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clientes.page.html */ 52990);
/* harmony import */ var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page.scss */ 41738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ClientesPage = class ClientesPage {
    constructor() {
        this.titulo = 'Clientes';
        //
    }
    ngOnInit() {
    }
};
ClientesPage.ctorParameters = () => [];
ClientesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-clientes',
        template: _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientesPage);



/***/ }),

/***/ 41738:
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 52990:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_clientes_clientes_module_ts-es2015.js.map