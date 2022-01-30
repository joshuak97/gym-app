(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_horarios-admin_horarios-admin_module_ts"],{

/***/ 23835:
/*!***********************************************************************!*\
  !*** ./src/app/pages/horarios-admin/horarios-admin-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorariosAdminPageRoutingModule": function() { return /* binding */ HorariosAdminPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _horarios_admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horarios-admin.page */ 9659);




const routes = [
    {
        path: '',
        component: _horarios_admin_page__WEBPACK_IMPORTED_MODULE_0__.HorariosAdminPage
    }
];
let HorariosAdminPageRoutingModule = class HorariosAdminPageRoutingModule {
};
HorariosAdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HorariosAdminPageRoutingModule);



/***/ }),

/***/ 18955:
/*!***************************************************************!*\
  !*** ./src/app/pages/horarios-admin/horarios-admin.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorariosAdminPageModule": function() { return /* binding */ HorariosAdminPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _horarios_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horarios-admin-routing.module */ 23835);
/* harmony import */ var _horarios_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horarios-admin.page */ 9659);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let HorariosAdminPageModule = class HorariosAdminPageModule {
};
HorariosAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _horarios_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.HorariosAdminPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_horarios_admin_page__WEBPACK_IMPORTED_MODULE_1__.HorariosAdminPage]
    })
], HorariosAdminPageModule);



/***/ }),

/***/ 9659:
/*!*************************************************************!*\
  !*** ./src/app/pages/horarios-admin/horarios-admin.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorariosAdminPage": function() { return /* binding */ HorariosAdminPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_horarios_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./horarios-admin.page.html */ 67663);
/* harmony import */ var _horarios_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horarios-admin.page.scss */ 24770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HorariosAdminPage = class HorariosAdminPage {
    constructor() {
        this.titulo = 'Horarios';
    }
    ngOnInit() {
    }
};
HorariosAdminPage.ctorParameters = () => [];
HorariosAdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horarios-admin',
        template: _raw_loader_horarios_admin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_horarios_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HorariosAdminPage);



/***/ }),

/***/ 24770:
/*!***************************************************************!*\
  !*** ./src/app/pages/horarios-admin/horarios-admin.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jhcmlvcy1hZG1pbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 67663:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/horarios-admin/horarios-admin.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_horarios-admin_horarios-admin_module_ts-es2015.js.map