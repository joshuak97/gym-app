(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_programas_programas_module_ts"],{

/***/ 5646:
/*!*************************************************************!*\
  !*** ./src/app/pages/programas/programas-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramasPageRoutingModule": function() { return /* binding */ ProgramasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _programas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programas.page */ 30830);




const routes = [
    {
        path: '',
        component: _programas_page__WEBPACK_IMPORTED_MODULE_0__.ProgramasPage
    }
];
let ProgramasPageRoutingModule = class ProgramasPageRoutingModule {
};
ProgramasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProgramasPageRoutingModule);



/***/ }),

/***/ 27851:
/*!*****************************************************!*\
  !*** ./src/app/pages/programas/programas.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramasPageModule": function() { return /* binding */ ProgramasPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _programas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programas-routing.module */ 5646);
/* harmony import */ var _programas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programas.page */ 30830);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let ProgramasPageModule = class ProgramasPageModule {
};
ProgramasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _programas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgramasPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_programas_page__WEBPACK_IMPORTED_MODULE_1__.ProgramasPage]
    })
], ProgramasPageModule);



/***/ }),

/***/ 30830:
/*!***************************************************!*\
  !*** ./src/app/pages/programas/programas.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramasPage": function() { return /* binding */ ProgramasPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_programas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./programas.page.html */ 24954);
/* harmony import */ var _programas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programas.page.scss */ 76749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ProgramasPage = class ProgramasPage {
    constructor() {
        this.titulo = 'Programas';
    }
    ngOnInit() {
    }
};
ProgramasPage.ctorParameters = () => [];
ProgramasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-programas',
        template: _raw_loader_programas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_programas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProgramasPage);



/***/ }),

/***/ 76749:
/*!*****************************************************!*\
  !*** ./src/app/pages/programas/programas.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtYXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 24954:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/programas/programas.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_programas_programas_module_ts-es2015.js.map