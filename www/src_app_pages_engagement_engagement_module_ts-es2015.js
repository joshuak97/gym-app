(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_engagement_engagement_module_ts"],{

/***/ 23135:
/*!***************************************************************!*\
  !*** ./src/app/pages/engagement/engagement-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngagementPageRoutingModule": function() { return /* binding */ EngagementPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _engagement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engagement.page */ 42577);




const routes = [
    {
        path: '',
        component: _engagement_page__WEBPACK_IMPORTED_MODULE_0__.EngagementPage
    }
];
let EngagementPageRoutingModule = class EngagementPageRoutingModule {
};
EngagementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EngagementPageRoutingModule);



/***/ }),

/***/ 77777:
/*!*******************************************************!*\
  !*** ./src/app/pages/engagement/engagement.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngagementPageModule": function() { return /* binding */ EngagementPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _engagement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engagement-routing.module */ 23135);
/* harmony import */ var _engagement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engagement.page */ 42577);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let EngagementPageModule = class EngagementPageModule {
};
EngagementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _engagement_routing_module__WEBPACK_IMPORTED_MODULE_0__.EngagementPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_engagement_page__WEBPACK_IMPORTED_MODULE_1__.EngagementPage]
    })
], EngagementPageModule);



/***/ }),

/***/ 42577:
/*!*****************************************************!*\
  !*** ./src/app/pages/engagement/engagement.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngagementPage": function() { return /* binding */ EngagementPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_engagement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./engagement.page.html */ 98709);
/* harmony import */ var _engagement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engagement.page.scss */ 8958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let EngagementPage = class EngagementPage {
    constructor() {
        this.titulo = 'Engagement';
        //
    }
    ngOnInit() {
    }
};
EngagementPage.ctorParameters = () => [];
EngagementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-engagement',
        template: _raw_loader_engagement_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_engagement_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EngagementPage);



/***/ }),

/***/ 8958:
/*!*******************************************************!*\
  !*** ./src/app/pages/engagement/engagement.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmdhZ2VtZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 98709:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/engagement/engagement.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_engagement_engagement_module_ts-es2015.js.map