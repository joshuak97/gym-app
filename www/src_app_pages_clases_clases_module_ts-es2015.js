(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_clases_clases_module_ts"],{

/***/ 55170:
/*!*******************************************************!*\
  !*** ./src/app/pages/clases/clases-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasesPageRoutingModule": function() { return /* binding */ ClasesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clases.page */ 41558);




const routes = [
    {
        path: '',
        component: _clases_page__WEBPACK_IMPORTED_MODULE_0__.ClasesPage
    }
];
let ClasesPageRoutingModule = class ClasesPageRoutingModule {
};
ClasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClasesPageRoutingModule);



/***/ }),

/***/ 87086:
/*!***********************************************!*\
  !*** ./src/app/pages/clases/clases.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasesPageModule": function() { return /* binding */ ClasesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _clases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clases-routing.module */ 55170);
/* harmony import */ var _clases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clases.page */ 41558);







let ClasesPageModule = class ClasesPageModule {
};
ClasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clases_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClasesPageRoutingModule
        ],
        declarations: [_clases_page__WEBPACK_IMPORTED_MODULE_1__.ClasesPage]
    })
], ClasesPageModule);



/***/ }),

/***/ 41558:
/*!*********************************************!*\
  !*** ./src/app/pages/clases/clases.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasesPage": function() { return /* binding */ ClasesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clases_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clases.page.html */ 80390);
/* harmony import */ var _clases_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clases.page.scss */ 75062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ClasesPage = class ClasesPage {
    constructor() { }
    ngOnInit() {
    }
};
ClasesPage.ctorParameters = () => [];
ClasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-clases',
        template: _raw_loader_clases_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clases_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClasesPage);



/***/ }),

/***/ 75062:
/*!***********************************************!*\
  !*** ./src/app/pages/clases/clases.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 80390:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clases/clases.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>clases</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_clases_clases_module_ts-es2015.js.map