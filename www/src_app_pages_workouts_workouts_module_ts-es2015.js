(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_workouts_workouts_module_ts"],{

/***/ 68754:
/*!***********************************************************!*\
  !*** ./src/app/pages/workouts/workouts-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsPageRoutingModule": function() { return /* binding */ WorkoutsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workouts.page */ 6938);




const routes = [
    {
        path: '',
        component: _workouts_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutsPage
    }
];
let WorkoutsPageRoutingModule = class WorkoutsPageRoutingModule {
};
WorkoutsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkoutsPageRoutingModule);



/***/ }),

/***/ 59978:
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsPageModule": function() { return /* binding */ WorkoutsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _workouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workouts-routing.module */ 68754);
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workouts.page */ 6938);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let WorkoutsPageModule = class WorkoutsPageModule {
};
WorkoutsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _workouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkoutsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_workouts_page__WEBPACK_IMPORTED_MODULE_1__.WorkoutsPage]
    })
], WorkoutsPageModule);



/***/ }),

/***/ 6938:
/*!*************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsPage": function() { return /* binding */ WorkoutsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./workouts.page.html */ 47822);
/* harmony import */ var _workouts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workouts.page.scss */ 93910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let WorkoutsPage = class WorkoutsPage {
    constructor() {
        this.titulo = 'Workouts Page';
        //
    }
    ngOnInit() {
    }
};
WorkoutsPage.ctorParameters = () => [];
WorkoutsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-workouts',
        template: _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_workouts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkoutsPage);



/***/ }),

/***/ 93910:
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrb3V0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 47822:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/workouts.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_workouts_workouts_module_ts-es2015.js.map