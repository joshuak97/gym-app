(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_cuotas_cuotas_module_ts"],{

/***/ 24349:
/*!*******************************************************!*\
  !*** ./src/app/pages/cuotas/cuotas-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuotasPageRoutingModule": function() { return /* binding */ CuotasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cuotas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuotas.page */ 67230);




const routes = [
    {
        path: '',
        component: _cuotas_page__WEBPACK_IMPORTED_MODULE_0__.CuotasPage
    }
];
let CuotasPageRoutingModule = class CuotasPageRoutingModule {
};
CuotasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CuotasPageRoutingModule);



/***/ }),

/***/ 92500:
/*!***********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuotasPageModule": function() { return /* binding */ CuotasPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cuotas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuotas-routing.module */ 24349);
/* harmony import */ var _cuotas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuotas.page */ 67230);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let CuotasPageModule = class CuotasPageModule {
};
CuotasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cuotas_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuotasPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_cuotas_page__WEBPACK_IMPORTED_MODULE_1__.CuotasPage]
    })
], CuotasPageModule);



/***/ }),

/***/ 67230:
/*!*********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuotasPage": function() { return /* binding */ CuotasPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cuotas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cuotas.page.html */ 58511);
/* harmony import */ var _cuotas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuotas.page.scss */ 20608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CuotasPage = class CuotasPage {
    constructor() {
        this.titulo = 'Cuotas';
    }
    ngOnInit() {
    }
};
CuotasPage.ctorParameters = () => [];
CuotasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cuotas',
        template: _raw_loader_cuotas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cuotas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CuotasPage);



/***/ }),

/***/ 20608:
/*!***********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdW90YXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 58511:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cuotas/cuotas.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cuotas_cuotas_module_ts-es2015.js.map