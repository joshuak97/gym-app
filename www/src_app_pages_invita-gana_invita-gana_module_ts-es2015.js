(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_invita-gana_invita-gana_module_ts"],{

/***/ 25333:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invita-gana/invita-gana-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitaGanaPageRoutingModule": function() { return /* binding */ InvitaGanaPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invita_gana_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invita-gana.page */ 14684);




const routes = [
    {
        path: '',
        component: _invita_gana_page__WEBPACK_IMPORTED_MODULE_0__.InvitaGanaPage
    }
];
let InvitaGanaPageRoutingModule = class InvitaGanaPageRoutingModule {
};
InvitaGanaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvitaGanaPageRoutingModule);



/***/ }),

/***/ 42049:
/*!*********************************************************!*\
  !*** ./src/app/pages/invita-gana/invita-gana.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitaGanaPageModule": function() { return /* binding */ InvitaGanaPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invita_gana_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invita-gana-routing.module */ 25333);
/* harmony import */ var _invita_gana_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invita-gana.page */ 14684);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let InvitaGanaPageModule = class InvitaGanaPageModule {
};
InvitaGanaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _invita_gana_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvitaGanaPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_invita_gana_page__WEBPACK_IMPORTED_MODULE_1__.InvitaGanaPage]
    })
], InvitaGanaPageModule);



/***/ }),

/***/ 14684:
/*!*******************************************************!*\
  !*** ./src/app/pages/invita-gana/invita-gana.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitaGanaPage": function() { return /* binding */ InvitaGanaPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invita_gana_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invita-gana.page.html */ 28197);
/* harmony import */ var _invita_gana_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invita-gana.page.scss */ 56711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let InvitaGanaPage = class InvitaGanaPage {
    constructor() {
        this.titulo = 'Invita y Gana';
        //
    }
    ngOnInit() {
    }
};
InvitaGanaPage.ctorParameters = () => [];
InvitaGanaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-invita-gana',
        template: _raw_loader_invita_gana_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invita_gana_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvitaGanaPage);



/***/ }),

/***/ 56711:
/*!*********************************************************!*\
  !*** ./src/app/pages/invita-gana/invita-gana.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGEtZ2FuYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 28197:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invita-gana/invita-gana.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invita-gana_invita-gana_module_ts-es2015.js.map